import React from 'react'
import Todo from '../components/Todo'
const TodoPage = () => {

  return (
    <div className='h-screen py-10 px-20 bg-black w-full justify-between  '>
      <h1 className='text-slate-200 mb-20 font-extrabold text-3xl'>heyy user </h1>
      <div className='flex flex-col gap-3'>
         <Todo/>
         <Todo/>
         <Todo/>
         <Todo/>
    
  
      </div>
    </div>
  )
}

export default TodoPage
