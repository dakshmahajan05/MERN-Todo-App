import React from 'react'

const Todo = () => {
  return (
    <div className='text-white flex overflow-hidden rounded-2xl  hover:bg-blue-600 cursor-pointer items-center min-w-80 justify-between gap-3 px-4 h-10 m-3 bg-blue-700 '>
       <p className='overflow-hidden max-w-[300px] truncate'>todo content </p>
       <input type="checkbox" className='scale-150 rounded-full cursor-pointer accent-green-500' />
    </div>
  )
}

export default Todo