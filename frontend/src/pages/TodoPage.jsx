import React, { useContext, useState } from 'react'
import Todo from '../components/Todo'
import { TodoContext } from '../Context/TodoContext'
const TodoPage = () => {
  const {todo,addTodo,fetchTodo,deleteTodo,updateTodo} = useContext(TodoContext)

  const [input,setinput]= useState('')

 const handleadd = () => {
  if (!input.trim()) return;
  addTodo({ text: input, completed: false }); // call context addTodo
  setinput(''); // clear input field
}

  return (
    <div className='h-screen py-10 px-20 bg-black w-full justify-between  '>
        <h1 className='text-slate-200 mb-20 font-extrabold text-3xl '>heyy user </h1>
      <div className='mx-auto justify-center items-center'>
        <input onChange={e=>{setinput(e.target.value)}} value={input} type="text" placeholder='Enter Todo' className='bg-white mb-4 px-2 py-1 rounded-md' />
        <button onClick={handleadd} className='bg-blue-700 px-2 py-1 rounded-md hover:bg-blue-600 cursor-pointer'>Add Todo</button>
      </div>
      <div className='flex flex-col gap-3'>
{todo.length > 0 ? (
  todo.map(t => (
    <Todo 
      key={t._id}
      todotext={t.text}
      completed={t.completed}
      ontoggle={() => updateTodo(t._id, { text: t.text, completed: !t.completed })}
      onedit={(newText) => updateTodo(t._id, { text: newText, completed: t.completed })}
      ondelete={() => deleteTodo(t._id)}
    />
  ))
) : (
  <p className="text-white">No todos yet</p>
)}

    
  
      </div>
    </div>
  )
}

export default TodoPage
