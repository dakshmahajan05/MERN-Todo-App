import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='bg-slate-100 flex flex-col h-screen justify-center items-center '>
        <h1 className='mb-15 text-3xl font-bold shadow'>Login Page</h1>
        <form action="" className='flex shadow-amber-100 flex-col gap-2 justify-center items-center px-5 py-10 rounded-2xl bg-white'>
            <input className='bg-white px-3 py-2 rounded-xl border' type="email" placeholder='Enter Your Email'/>
            <input className='bg-white px-3 py-2 rounded-xl border' type="text" placeholder='Enter Your Username'/>
            <input className='bg-white mb-6 px-3 py-2 rounded-xl border' type="password" placeholder='Enter Your Password'/>
            <p>not a user? <Link to='/signup' className='text-sm text-blue-700'>Register now</Link> </p>
            <button className='w-full bg-blue-600 text-white py-1 hover:bg-blue-500 cursor-pointer rounded-xl' type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login