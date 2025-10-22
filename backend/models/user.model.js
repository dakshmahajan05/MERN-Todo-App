import mongoose from 'mongoose'
import Todo from './todo.model.js';

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    todos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Todo"
    }]
},{timestamps:true})

const User = new mongoose.model("User",UserSchema)
export default User;