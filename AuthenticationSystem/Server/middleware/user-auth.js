import jwt  from 'jsonwebtoken'

const userAuth = async(req , res , next) =>{
    const {token} = req.cookies;
    if(!token){
        return res.json({
            success:false ,
            message:"Not Authorised Login Again"
        })
    }

    console.log(token);

    try {
       const tokendecode = jwt.verify(token , process.env.JWT_SECRET)
        console.log( "token id" ,tokendecode.id);
        if (tokendecode .id) {
      req.user = { userId: tokendecode .id }; // ✅ Safe place to store user id
      console.log("User ID from token:", req.user.userId);
       }else{
        return res.json({success:false,
            message:'not Authorized Login Again'
        });
       }

       next(); 

    } catch (error) {
       return res.json({
            success:false ,
            message:"no data parsed"
        }) 
    }
}

export default userAuth ;