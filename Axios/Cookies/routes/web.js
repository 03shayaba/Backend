import Router from 'express';
import { set_cookie ,get_cookie,delete_cookie } from '../controllers/studentController.js';
const router = Router();


router.get('/setCookie' , set_cookie)
router.get('/getCookie' , get_cookie)
router.get('/deleteCookie' , delete_cookie)
export default router;