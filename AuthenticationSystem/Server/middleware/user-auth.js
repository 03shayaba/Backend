import jwt  from 'jsonwebtoken'

const userAuth = async(req , res , next) =>{
    const {token} = req.cookies;
    if(!token){
        return res.json({
            success:false ,
            message:"Not Authorised Login Again"
        })
    }

    try {
       const tokendecode = jwt.verify(token , process.env.JWT_SECRET)

       if(tokendecode.id){
        req.body.userId = tokendecode.id
       }else{
        return res.json({success:false,
            message:'not Authorized Login Again'
        });
       }

       next(); 

    } catch (error) {
       return res.json({
            success:false ,
            message:error.message
        }) 
    }
}

export default userAuth ;