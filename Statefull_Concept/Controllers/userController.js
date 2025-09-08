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

const getRequest1 = async (req, res) => {
  return res.render("signup");
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
  const sessionId =uuidv4();
  setUser(sessionId , user);
  res.cookie('uid', sessionId);
  return res.redirect("/");
};

const getRequest2 = async (req, res) => {
  // const allUrls = await URL.find({});
  return res.render("login");
};
module.exports = {
  handleCreate,
  getRequest1,
  loginUser,
  getRequest2,
};
