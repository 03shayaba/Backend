import {Router}  from "express"
import {createPost,fetchPosts,showPost,updatePost ,deletePost} from "../Controller/PostController.js"
const router = Router()
router.post('/', createPost)
router.put('/:id', updatePost)
router.get('/', fetchPosts )
router.get('/:id', showPost )
router.delete('/:id', deletePost)
export default router