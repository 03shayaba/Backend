import prisma from "../DB/db.config.js";
export const fetchComment = async(req,res)=>{
     const comments = await prisma.comment.findMany({
        
        include:{
            user:true,
            post:{
                include:{
                   user:true, 
                }
            }
        }
     })
     return res.json({status:200 , message:comments})
}
export const createComemnt = async (req, res) => {
    const {user_id, post_id, comment} = req.body;

    // increase the comment counter
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                increment:1
            }
        }
    })
    const newComment = await prisma.comment.create({
        data:{
            user_id:Number(user_id),
            post_id: Number(post_id),
            comment,
        }
    })
    return res.json({status:200, data: newComment , age:"comment created succefully"})
};

// show the user

export const  showComment = async(req,res)=>{
    const commentsId = req.params.id
    const comments =await prisma.comment.findFirst({
        where:{
            id:Number(commentsId)
        }
    })
    return res.json({status:200 ,message:comments})
}
// update the user 
// export  const updateComment = async(req,res)=>{
//     const commentsId = req.params.id
//          const {user_id , title, description} = req.body;
//          await prisma.comment.update({
//             where:{
//                 id:Number(commentsId)
//             },
//             data:{
//                 user_id , title, description
//             }
//          })
//          return res.json({status:200 , message:"post updated"})
// }

// delete user

export const deleteComment = async(req,res)=>{
    const commentsId = req.params.id;
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement:1
            }
        }
    })
     const comments =await prisma.comment.delete({
        where:{
            id:Number(commentsId)
        }
    })
    return res.json({status:202 ,data:comments , message:"Post deleted  succesfuly"})
}