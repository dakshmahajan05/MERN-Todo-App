import Todo from "../models/todo.model.js";
import User from "../models/user.model.js";


export const createTodo = async(req,res)=>{
    try {
        const {text} = req.body
        const userId = req.user.id 

        const todo =await new Todo({text,user:userId})
        await todo.save()
        res.status(200).json({message:"todo created",todo})

    } catch (error) {
        console.log("err while creating todo",error);
        return res.status(400).json({message:"error in creating todo"})

        
    }
}

export const deleteTodo = async(req,res)=>{
    try {
       const {id}= req.params
       const userId = req.user.id

       const todo = await Todo.findOneAndDelete({_id:id,user:userId})

       if(!todo){
        return res.status(400).json({message:"todo not found"})

       }

       return res.status(200).json({message:"todo deleted",todo})
    } catch (error) {
        console.log("err while deleting todo");
        return res.status(400).json({message:"err in todo deletion"})
    
    }
}

export const updateTodo = async(req,res)=>{
    try {
        const {id}= req.params;
        const todo = await Todo.findById(id)

        if(!todo){
            return res.status(400).json({message:"todo not found"})
        }
        const {text,completed}= req.body
        const updatedTodo = await Todo.findByIdAndUpdate(id,{text,completed},{new:true})
        
        return res.status(200).json({message:"todo updated",updatedTodo})

    } catch (error) {
        console.log("err in updating todo");
        return res.status(400).json({message:"err in updating todo"})
        
    }
}

export const getTodo = async(req,res)=>{
   try {
     const userId = req.user.id
     const todos=await Todo.find({user:userId})
     if(!todos || todos.length===0){
         return res.status(400).json({message:"not found"})
     }
     return res.status(200).json({message:"todos fetched successfully",todos})
   } catch (error) {
    console.log("err in fetching todos");
    return res.status(400).json({message:"cant fetch todos"})
    
   }
}