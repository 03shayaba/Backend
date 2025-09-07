import {Router}  from "express"
import {fetchComment,createComemnt,showComment,deleteComment} from "../Controller/CommentController.js"
const router = Router()
router.post('/', createComemnt)
// router.put('/:id', updatePost)
router.get('/', fetchComment)
router.get('/:id', showComment)
router.delete('/:id', deleteComment)
export default router