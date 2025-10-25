import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import express from 'express'
const app = express()
import connectDB from './db/conn.js'

app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true                // cookies/token ke liye
}))



app.get('/',(req,res)=>{
    res.send("app getting ")
    console.log("working");
    
})
app.use(express.json())


//mongoDB connection 
connectDB()



import userRoute from './routes/user.routes.js'
import todoRoute from './routes/todo.routes.js'

app.use('/api/v1/user',userRoute)
app.use('/api/v1/todo',todoRoute)


const PORT = process.env.PORT || 4000




app.listen(PORT,()=>{
    console.log(`listening on PORT: ${PORT}`);
    
})
