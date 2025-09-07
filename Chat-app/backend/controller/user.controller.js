import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
  //   console.log("Incoming body:", req.body);
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({
        message: "password do not match",
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "email alredy exists" });
    }

    //    hashing the password

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      confirmpassword,
    });
    await newUser.save();
    if (newUser) {
      createTokenAndSaveCookie(newUser._id, res);
      res.status(201).json({ message: "user registered succefully", newUser });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(404).json({ message: "Invalid user and password " });
    }
    createTokenAndSaveCookie(user._id, res);
    res.status(201).json({
      message: "user logged in succefully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

export const logout = async(req,res)=>{
  try {
     res.clearCookie('jwt');
     res.status(200).json({message:"used logged out successfully "});
  } catch (error) {
     console.log(error);
    res.status(500).json({ message: "server error" });
 
  }
}
