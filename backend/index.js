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

app.use(express.json())


import userRoute from './routes/user.routes.js'
import todoRoute from './routes/todo.routes.js'

app.use('/api/v1/user',userRoute)
app.use('/api/v1/todo',todoRoute)


const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`listening on PORT: ${PORT}`);
    
})
