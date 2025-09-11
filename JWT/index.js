import express from 'express';
import dotenv from 'dotenv'
import connectDb from './connect.js'
import userRoutes from './Routes/userRoutes.js'
import { jwtAuthMiddleware } from './Middleware/Jwt_Auth.js';
import User from './model/users.js';
dotenv.config()
const app = express();

// 1. Middleware (before routes)
app.use(express.json());

// 2. Connect to MongoDB
connectDb();


// 3. Routes
app.use('/person' , userRoutes);
app.get("/", jwtAuthMiddleware, async(req, res) => {
  try{
    const data = await User.find({});
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.json({
      error:"internal server error",
      message:err.message
    })
  }
});





const Port = process.env.PORT||3000 ;
app.listen(Port, ()=>{
    console.log(`server is listen on port ${Port}`);
})