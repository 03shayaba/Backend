import prisma from "../DB/db.config.js";
export const fetchPosts = async(req,res)=>{
     const posts = await prisma.post.findMany({
        include:{
            comment:{
               include:{
                user:true,
               }, 
            },

        }
     })
     return res.json({status:200 , message:posts})
}
export const createPost = async (req, res) => {
  try {
    const { user_id, title, description } = req.body;

    // Agar user_id missing ya invalid hai, return error
    const parsedUserId = Number(user_id);
    if (!parsedUserId) {
      return res.status(400).json({
        status: 400,
        msg: "Invalid or missing user_id"
      });
    }

    const newPost = await prisma.post.create({
      data: {
        user_id: parsedUserId,
        title,
        description
      }
    });

    return res.json({ status: 200, data: newPost, msg: "Post created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: 500, msg: "Server error", error: err.message });
  }
};

// show the user

export const  showPost = async(req,res)=>{
    const postId = req.params.id
    const post =await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    })
    return res.json({status:200 ,message:post})
}
// update the user 
export  const updatePost = async(req,res)=>{
    const postId = req.params.id
         const {user_id , title, description} = req.body;
         await prisma.user.update({
            where:{
                id:Number(postId)
            },
            data:{
                user_id , title, description
            }
         })
         return res.json({status:200 , message:"post updated"})
}

// delete user

export const deletePost = async(req,res)=>{
    const PostId = req.params.id;
     const Post =await prisma.post.delete({
        where:{
            id:Number(PostId)
        }
    })
    return res.json({status:202 ,data:Post , message:"Post deleted  succesfuly"})
}