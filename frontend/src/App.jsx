import React from 'react'
import { Route,Routes } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from '../../backend/models/todo.model'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/todo' element={<TodoPage/>} />
      </Routes>
    </div>
  )
}

export default App
