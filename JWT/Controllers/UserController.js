import { generateToken } from "../Middleware/Jwt_Auth.js";
import User from "../model/users.js";


export const SignupUser = async(req , res)=>{
    try {
        const {username , email, password} = req.body;
        
   const user = await User.create({
        username,
        email,
        password
    })
    console.log(user);
    const payload ={
        id: user.id ,
        email:user.email
    }
    console.log(JSON.stringify(payload));
    const token = generateToken(payload)

    res.status(200).json({
        data:user,
        token:token,
        message:"youa are signup successfully"
    })
    } catch (error) {
       res.status(500).json({
      message: "Error signing up",
      error: error.message
    });  
    }
}
 

export const LoginUser = async(req, res)=>{
    try {
        const {email , password} = req.body ;
    const user = await User.findOne({email})

    if(!user){
        return res.json({
            message: "Please fill the correct Email"
        })
    }
    if(user.password !== password){
        return res.json({
            message: "Please fill the correct password"
        })
    }

    const payload ={
        id: user.id ,
        email:user.email
    }

    const token = generateToken(payload);

    return res.json({
        token:token,
        message:"you are login"
    })
    } catch (error) {
        res.status(500).json({
      message: "Error signing up",
      error: error.message
    });
    }
}
