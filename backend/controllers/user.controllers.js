import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const registerUser = async(req,res)=>{
   try {


     const {email,username,password} = req.body;

     const user =await User.findOne({email})
     if(user){
        return res.status(400).json({message:"user already exist"})
     }

     const hashPass = bcrypt.hashSync(password,10)

     const newUser =await new User({email,username,password:hashPass});
     await newUser.save();

     console.log("user registered successfully");
     return res.status(200).json({message: "user registered successfully", newUser})
     
   } catch (error) {
    console.log("err while registering user",error.message);
    return res.status(400).json("err while registering user")
   }
}
const loginUser = async (req,res)=>{
   try {
       const {email,password} = req.body;
       const user =await User.findOne({email})
       if(!user){
         return res.status(400).json({message:"user not found"})
       }

       const passCorrect =await bcrypt.compare(password,user.password)
       if(passCorrect){
          const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'1d'})
          console.log("login successfull");
         return res.status(200).json({message:"user login successfull",token,user})
       }else{
         return res.status(400).json({message:"invalid credentials"})
       }
   } catch (error) {
      console.log("err while login");
      return res.status(400).json({message:"unable to login"})
      
   }
    
}


const usercontrollers = {
    loginUser,
    registerUser
}

export default usercontrollers