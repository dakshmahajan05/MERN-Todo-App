import React, { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
const Register = () => {

  const {register} = useContext(AuthContext)


  const [formdata,setformdata] = useState({
    'email':'',
    'username':'',
    'password':''
  })

  const handlechange = async(e)=>{ 
    setformdata(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handlesubmit= async(e)=>{
    e.preventDefault()
    console.log("formdata: ",formdata);
    await register(formdata);
    alert("registered")
  }
  return (
   <div className='bg-slate-100 flex flex-col h-screen justify-center items-center '>
        <h1 className='mb-15 text-3xl font-bold shadow'>SignUp Page</h1>
        <form onSubmit={handlesubmit} action="" className='flex shadow-amber-100 flex-col gap-2 justify-center items-center px-5 py-10 rounded-2xl bg-white'>
            <input onChange={handlechange} name='email' value={formdata.email} className='bg-white px-3 py-2 rounded-xl border' type="email" placeholder='Enter Your Email'/>
            <input onChange={handlechange} name='username' value={formdata.username} className='bg-white px-3 py-2 rounded-xl border' type="text" placeholder='Enter Your Username'/>
            <input onChange={handlechange} name='password' value={formdata.password} className='bg-white mb-6 px-3 py-2 rounded-xl border' type="password" placeholder='Enter Your Password'/>
            <p>Already a user? <Link to='/login' className='text-sm text-blue-700'>Login now</Link> </p>
            <button className='w-full bg-blue-600 text-white py-1 hover:bg-blue-500 cursor-pointer rounded-xl' type='submit'>Register</button>
        </form>

    </div>
  )
}

export default Register
