import jwt from 'jsonwebtoken';
const createTokenAndSaveCookie = (userId , res) =>{
    const token = jwt.sign({userId}, process.env.JWT_TOKEN,{
        expiresIn:"5d",
    });
    res.cookie("jwt" , token,{
        httpOnly:true,     //xss atack se safty provide krta
        secure:true,
        sameSite:"strict",      //csrf attack
    });
};

export default createTokenAndSaveCookie;