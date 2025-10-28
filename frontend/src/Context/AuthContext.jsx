import { createContext } from "react";
import API from "../api/axios";
import { useState } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props)=>{

    const [user,setuser]= useState(null)

    const register = async(formdata)=>{
        try {
                const res = await API.post('/user/register',formdata)
                console.log("register response:",res.data);

        } catch (error) {
                console.log("err.response.data");

                
        }
    
    }

    const login = async(formdata)=>{
        try {
            const res =await API.post('/user/login',formdata)
            console.log("login response: ",res.data);
            setuser(res.data.user)
            localStorage.setItem("token",res.data.token)
            return res.data
            
        } catch (error) {
            console.log("err.response.data");
            
        }
    }   


    const logout = ()=>{
        setuser(null)
        localStorage.removeItem('token')
    }



   return (
     <AuthContext.Provider value={{logout,register,login,user}}>
        {props.children}
    </AuthContext.Provider>
   )
}

export default AuthContextProvider;