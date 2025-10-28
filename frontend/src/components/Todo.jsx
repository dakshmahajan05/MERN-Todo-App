import React, { useState } from 'react';

const Todo = ({ todotext, completed, ontoggle, onedit, ondelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todotext);

  const handleEditSave = () => {
    if(editText.trim() === '') return;
    onedit(editText); // call context updateTodo
    setIsEditing(false);
  }

  return (
    <div className='flex flex-col bg-gray-800 p-2 rounded-md'>
      <div className='flex items-center gap-2'>
        {isEditing ? (
          <input 
            value={editText} 
            onChange={e => setEditText(e.target.value)} 
            className='px-2 py-1 rounded-md flex-1'
          />
        ) : (
          <p className={`text-white flex-1 ${completed ? 'line-through text-green-400' : ''}`}>{todotext}</p>
        )}
        <input type="checkbox" checked={completed} onChange={ontoggle} className='scale-125 accent-green-500'/>
      </div>

      <div className='mt-2 flex gap-2'>
        {isEditing ? (
          <button onClick={handleEditSave} className='bg-yellow-400 text-white px-2 rounded-md font-bold'>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className='bg-yellow-400 text-white px-2 rounded-md font-bold'>Edit</button>
        )}
        <button onClick={ondelete} className='bg-red-600 text-white px-2 rounded-md font-bold'>Delete</button>
      </div>
    </div>
  )
}

export default Todo;