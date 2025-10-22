import mongoose from 'mongoose'

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("conected to mongoDB");
        
    } catch (error) {
        console.log("err while connecting to mongoDB",error.message);
        
    }
}
export default connectDB;