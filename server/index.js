const express=require("express")
const app=express()
const {connection}=require('./db')
const {userRouter}=require('./route/user.route')
const {productRouter}=require('./route/product.route')
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/products',productRouter)
app.get('/',(req,res)=>{
    res.send('home page')
})

app.listen(8080,async()=>{
    console.log('connected to server')
    try{
await connection
console.log('connected to db')
    }
    catch(err)
    {
        console.log(err)
    }
})