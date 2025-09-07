import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js'

const app = express();
dotenv.config();
app.use(express.json())

const port = process.env.PORT || 5001 ;
const URI = process.env.MONGODB_URI ;


try {
    mongoose.connect(URI);
    (console.log("MONGO DB connected"));
} catch (error) {
    console.log(error);
}

app.use("/user",userRoute)

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`)
})