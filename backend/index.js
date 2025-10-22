import dotenv from 'dotenv'
dotenv.config()


import express from 'express'
const app = express()
import connectDB from './db/conn.js'

app.get('/',(req,res)=>{
    res.send("app getting ")
    console.log("working");
    
})

//mongoDB connection 
connectDB()



const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`listening on PORT: ${PORT}`);
    
})
