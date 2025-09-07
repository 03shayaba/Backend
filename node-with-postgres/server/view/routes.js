// import { Router } from "express";
import express from "express" ;
import { getALLEmp , addEmp ,updateEmp , DeleteEmp } from "../controller/userController.js";
const router = express.Router();

router.get('/getall' , getALLEmp);
router.post('/addemp' , addEmp);
router.put('/update/:empid', updateEmp);
router.delete('/deleteEmp/:empid' , DeleteEmp);

export default router;