require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/Contact-router")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute)


// app.get("/",(req , res) =>{
//     res.status(200).send("Welcome to world best mern series");
// } );

// app.get("/register",(req , res) =>{
//     res.status(200).send("Welcome to Registration");
// } );
app.use(errorMiddleware);
const PORT = 3420;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running in port :${PORT}`);
  });
});
