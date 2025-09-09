const User = require("../Models/user.js");
const {v4:uuidv4} = require('uuid');
const { setUser } =require('../services/auth.js')
const handleCreate = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render("home");
};



const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      error: "invalid email ",
    });
  }
   if (user.password !== password) {
    return res.json({ error: "Invalid password" });
  }
  // const sessionId =uuidv4();
  // setUser(sessionId , user);

 const token = setUser(user);
  res.cookie('uid', token);
  console.log("Generated token:", token);

  return res.redirect("/");
};


module.exports = {
  handleCreate,

  loginUser,
 
};
