import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'


const Login = () => {
  const {login} = useContext(AuthContext)

  const navigate = useNavigate()

  const [formdata,setFormData] = useState({
    'email':'',
    'password':''
  })
  const handlechange =async(e)=>{
    setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handlesubmit= async(e)=>{
    e.preventDefault();
    const res = await login(formdata);
    if(res && res.token){
      alert("login succesfull")
      navigate('/todo')
    }else{
      alert("login failed")
    }
  }

  return (
    <div className='bg-slate-100 flex flex-col h-screen justify-center items-center '>
        <h1 className='mb-15 text-3xl font-bold shadow'>Login Page</h1>
        <form onSubmit={handlesubmit} action="" className='flex shadow-amber-100 flex-col gap-2 justify-center items-center px-5 py-10 rounded-2xl bg-white'>
            <input onChange={handlechange} name='email' value={formdata.email} className='bg-white px-3 py-2 rounded-xl border' type="email" placeholder='Enter Your Email'/>
            <input onChange={handlechange} name='password' value={formdata.password} className='bg-white mb-6 px-3 py-2 rounded-xl border' type="password" placeholder='Enter Your Password'/>
            <p>not a user? <Link to='/signup' className='text-sm text-blue-700'>Register now</Link> </p>
            <button className='w-full bg-blue-600 text-white py-1 hover:bg-blue-500 cursor-pointer rounded-xl' type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login