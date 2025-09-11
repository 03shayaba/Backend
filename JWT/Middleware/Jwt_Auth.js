import jwt from 'jsonwebtoken';
export const jwtAuthMiddleware = (req,res, next) =>{

    const authorization = req.headers.authorization
    if(!authorization)  return res.json({error:"token Not found"});
    // Extract the JWT token from the request headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        return res.json(401).json({
            error:'Unauthorized'
        });
    }

    try{

        // verify the jwt token
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
         req.user = decoded ;
        next()
    }catch(error){
        console.log(error);
        res.status(401).json({
            error:'Invalid token'
        });
    }
}



export const generateToken = (payload) =>{
    

    return jwt.sign(payload, process.env.JWT_SECRET , {expiresIn:"10m"});
}


