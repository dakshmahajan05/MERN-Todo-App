import { createContext, useEffect, useState } from "react";
import API from "../api/axios";

export const TodoContext = createContext()

const TodoContextProvider= (props)=>{

    const [todo,setTodo] = useState([])


    const fetchTodo = async()=>{
        try {
            const res = await API.get('/todo/get')
            setTodo(res.data.todos)
        } catch (error) {
            console.log("err fetchig todo",error.message);
            
        }
    }   

    const addTodo = async(todoData)=>{
        try {
            const res = await API.post('/todo/create',todoData)
            setTodo((prev)=>[...prev,res.data.newTodo])
        } catch (error) {
            console.log("err adding todo: ",error.message);
            
        }
    }

    const deleteTodo = async(id)=>{
        try {
            await API.delete(`/todo/delete/${id}`);
            setTodo((prev)=>prev.filter((todo)=>todo._id!==id))

        } catch (error) {
            console.log("err in deleting todo",error.message);
            
        }
    }

   const updateTodo = async(id, updatedData) => {
  try {
    const res = await API.put(`/todo/update/${id}`, updatedData); // send {text,completed}
    setTodo(prev => prev.map(todo => todo._id === id ? res.data.updatedTodo : todo));
  } catch (err) {
    console.log("Error updating todo:", err.response?.data || err.message);
  }
}

    useEffect(()=>{
        fetchTodo()
    },[])
   
    return (
        <TodoContext.Provider value={{todo,addTodo,fetchTodo,deleteTodo,updateTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;