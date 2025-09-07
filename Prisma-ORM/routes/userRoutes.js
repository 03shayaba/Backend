import {Router}  from "express"
import {createUser,updateuser, fetchUsers, showUser,deleteUser} from '../Controller/UserController.js'
const router = Router()

router.post('/', createUser)
router.put('/:id', updateuser)
router.get('/', fetchUsers )
router.get('/:id', showUser )
router.delete('/:id', deleteUser )
export default router