import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Context/AuthContext.jsx'
import TodoContextProvider, { TodoContext } from './Context/TodoContext.jsx'
createRoot(document.getElementById('root')).render(
  
    <TodoContextProvider>
    <AuthContextProvider>
        <BrowserRouter>
      
    <App />
       
    </BrowserRouter>
    </AuthContextProvider>
    </TodoContextProvider>
  
)
