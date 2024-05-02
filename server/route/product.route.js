const express=require('express')
const productRouter=express.Router()
const {auth}=require('../middleware/auth.middleware')
const {access}=require('../middleware/access.middleware')
const {ProductModel}=require('../model/product.model')
productRouter.get('/',auth,async(req,res)=>{
    try{
        const products=await ProductModel.find()
        res.status(200).json({products})
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})

productRouter.post('/',auth,access,async(req,res)=>{
    const {name,description,price,image}=req.body
    try{
        const newproduct=new ProductModel({name,image,price,description})
        await newproduct.save()
        res.status(200).json({msg:'product has been added',newproduct})
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})

productRouter.delete('/:id',auth,access,async(req,res)=>{
    const _id=req.params.id
    try{
        await ProductModel.findByIdAndDelete(_id)
        res.status(200).json({msg:'item has been deleted'})
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})

productRouter.patch('/:id',auth,access,async(req,res)=>{
    const _id=req.params.id
    const {name,price,description}=req.body
    try{
        await ProductModel.findByIdAndUpdate(_id,{name,price,description})
        res.status(200).json({msg:'item has been updated'})
    }
    catch(err)
    {
        res.status(400).json({error:err})
    }
})

module.exports={
    productRouter
}