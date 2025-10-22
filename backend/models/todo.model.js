import mongoose, { mongo, Types } from 'mongoose'
import User from './user.model.js'

const TodoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Todo = new mongoose.model("Todo",TodoSchema)

export default Todo

