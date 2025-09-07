import prisma from "../DB/db.config.js";
export const fetchUsers = async(req,res)=>{
     const users = await prisma.user.findMany({
        // it  will prints the post and comment
        select:{
            _count:{
                select:{
                    post:true,
                    comment:true,
                }
            }
        }

        // it  totaly prints the  the
        // include:{
        //     post:{
        //         select:{
        //             title:true,
        //             comment_count :true,
        //         },
        //     },

        // },
     })
     return res.json({status:200 , message:users})
}
export const createUser = async(req,res) =>{
     const {name , email , password} = req.body;
     const findUser = await prisma.user.findUnique({
        where:{
            email:email
        }
     })
     if(findUser){
        return res.json({status:400 ,message:"Email Already Taken . please use another email"})
     }

     const newUser = await prisma.user.create({
        data:{
           name:name,
           email:email,
           password:password 
        }
     })
     return res.json({status:200, data:newUser, msh:"User created"})
};

// show the user

export const  showUser = async(req,res)=>{
    const userId = req.params.id
    const user =await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    })
    return res.json({status:200 ,message:user})
}
// update the user 
export  const updateuser = async(req,res)=>{
    const userId = req.params.id
         const {name , email , password} = req.body;
         await prisma.user.update({
            where:{
                id:Number(userId)
            },
            data:{
                name,
                email,
                password
            }
         })
         return res.json({status:200 , message:"user updated"})
}

// delete user

export const deleteUser = async(req,res)=>{
    const userId = req.params.id;
     const user =await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return res.json({status:202 ,data:user , message:"user deleted  succesfuly"})
}