const jwt=require('jsonwebtoken')
const {UserModel}=require('../model/user.model')
const access=async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    try{
        const decoded=await jwt.verify(token,"masai")
        const {userID}=decoded
        const user=await UserModel.findOne({_id:userID})
        if(user.role==='admin')
        {
            next()
        }
        else{
            res.status(200).json({msg:'not authorised'})
        }
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
}

module.exports={
    access
}