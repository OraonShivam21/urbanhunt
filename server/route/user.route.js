const {UserModel}=require('../model/user.model')
const {LogoutModel}=require('../model/logout.model')
const express=require('express')
const userRouter=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
userRouter.get('/',async(req,res)=>{
  try{
    const user=await UserModel.find()
    res.status(200).json({msg:'user data',user})
  }
  catch(err)
  {
    res.status(400).json({error:err})
  }
})

userRouter.post('/signup',async(req,res)=>{
    const {email,name,password,role}=req.body
    try{
const user=await UserModel.findOne({email})
if(user)
{
res.status(200).json({msg:'user already exist, login please'})
}else{
    const hash=await bcrypt.hash(password,5)
const user=new UserModel({name,email,password:hash,role})
await user.save()
res.status(200).json({msg:'register successfull'})
}
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
const user=await UserModel.findOne({email})
if(!user)
{
res.status(404).json({msg:'user not found, signup please'})
}else{
   const result=await bcrypt.compare(password,user.password)
   if(result)
   {
    const token=jwt.sign({userID:user._id},"masai")
    res.status(200).json({msg:'login successfull',token})
   }else{
    res.status(200).json({msg:'wrong password'})
   }
}
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})


userRouter.post('/logout',async(req,res)=>{
const token=req.headers.authorization?.split(" ")[1]
try{
const newentry=new LogoutModel({token})
await newentry.save()
res.status(200).json({msg:"logout success",token})
}
catch(err)
{
    res.status(400).json({error:err})
}
})

module.exports={
    userRouter
}