import React from 'react'
import { Route,Routes } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './Context/ProtectedRoute'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/todo' element={
         <PrivateRoute>
           <TodoPage/>
         </PrivateRoute>
          } />
      </Routes>
    </div>
  )
}

export default App
