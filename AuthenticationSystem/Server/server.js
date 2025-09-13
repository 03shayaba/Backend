import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectdb from "./config/mongodb.js";
import {authrouter }from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js";

const app = express() ;
const port =process.env.PORT|| 3000;
connectdb();
app.use(express.json());

app.use(cookieParser());
app.use(cors({credentials:true}))

// Api endpoints
// app.get('/user' ,(req,res)=>{
//    res.send("api working");
// })

app.use('/api/auth' , authrouter);
app.use('/api/user' , userRouter);
app.listen(port , ()=>{
    console.log(`the server is runnig in the port ${port}`);
})

// mongodb+srv://<db_username>:<db_password>@cluster0.xaxphec.mongodb.net/
