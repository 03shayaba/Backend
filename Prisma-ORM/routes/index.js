import { Router } from "express";
import userRoutes from "./userRoutes.js"; 
import postRoutes from './postRoutes.js';
import commentRoutes from './commentRoute.js';
const router = Router()
router.use("/api/user", userRoutes)
router.use("/api/post" , postRoutes);
router.use("/api/comment" , commentRoutes);
export default router;