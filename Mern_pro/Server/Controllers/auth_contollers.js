const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// home logic
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to My new website page");
  } catch (error) {
    console.log(error);
  }
};

// *-------------------------------
// Registration logic
// *-------------------------------


const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email is alrady exist" });
    }
    // *------------------------
    // hashpasswords
    // *------------------------

    // const saltRound =10;
    // const hash_password = await bcrypt.hash(password , saltRound);

    const UserCreated = await User.create({
      username,
      email,
      phone,
      password,
      //  password:hash_password
    });
    res.status(201).json({
      msg: "registaration successfull",
      token: await UserCreated.generateToken(),
      userId: UserCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};



// ________________________________________________
// *------------------------
// user login logic
// *------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    // console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credential" });
    }

    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    
    if (user) {
      res
        .status(200)
        .json({
          msg: "login successfull",
          token: await userExist.generateToken(),
          userId: userExist._id.toString(),
        });
    }else{
      res.status(401).json({msg:"invalid email or password"})
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};



// ___________________________________________________
module.exports = { home, register,login };
