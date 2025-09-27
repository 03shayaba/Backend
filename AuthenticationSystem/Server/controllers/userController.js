import userModel from "../models/userModel.js";

export const getUserData = async(req,res) =>{
    try{
        // const {userId} = req.body;
        // const user = await userModel.findById(userId);
         const userId = req.user.userId;
        // if(!user){
        //     return res.json({success:false , message:'User Not found'});
        // }


        if (!userId) {
      return res.json({ success: false, message: "User ID not found" });
    }

    // yahan DB se user find karo
    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }


        res.json({
            success:true,
            userData:{
                name:user.name,
                 isAccountverified:user.isAccountverified
            }
        })

    }catch(error){
        res.json({
            success:false,
            message:error.message
        })
    }
}