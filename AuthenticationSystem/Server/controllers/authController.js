import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({
      success: false,
      message: "missing details",
    });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "user is allready exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    // syntax jwt => jwt.sign(payload , secret-key , option)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    // sending welcome email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      sunject: "Welcome to our learners",
      text: `welcome to our learners . Your account has been created with email id: ${email}`,
    };
    await transporter.sendMail(mailOptions);
    return res.json({
      success: true,
    });
  } catch (err) {
    // console.log(err);
    res.json({ success: false, message: err.message });
  }
};

// user LOgin

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({
      success: false,
      message: "email and password is required",
    });
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid email ",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: " Invalid password ",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });

    return res.json({
      success: true,
      message: "logged out",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// send verification OTP to the User's Email
export const sendVerifyOtp = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    if (user.isAccountverified) {
      return res.json({
        success: false,
        message: "accout Alredy verified ",
      });
    }
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;

    await user.save();
    const mailoption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      sunject: "Accout verification otp",
      text: `Your otp is ${otp} . verify your account using this OTP`,
    };
    await transporter.sendMail(mailoption);
    return res.json({
      success: true,
      message: "Verification OTP sent on Email",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  const { userId, otp } = req.body;

  if (!userId || !otp) {
    return res.json({
      success: false,
      message: "Missing Details",
    });
  }

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }

    if (user.verifyOtp === "" || user.verifyOtp !== otp) {
      return res.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (user.verifyOtpExpireAt < Date.now()) {
      return res.json({
        success: false,
        message: " OTP Expired",
      });
    }

    user.isAccountverified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = 0;
    await user.save();
    return res.json({
      success: true,
      message: "email verified successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// check if user is authneticated
export const isAuthenticated = async (req, res) => {
  try {
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({ success: false, message: "Email is required" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;

    await user.save();
    const mailoption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      sunject: "Accout Reset otp",
      text: `Your otp for resetting your password is ${otp}. Use this OTP to proceed with resetting your password `,
    };
    await transporter.sendMail(mailoption);

    return res.json({
      success:true ,
      message:'OTP send to your email'
    })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



// reset user password

export const resetPassword = async (req, res) =>{
  const {email , otp , newPassword} = req.body ;
  if(!email || !opt || !newPassword){
    return res.json({success:false, message:"email, otp , and new password are required"})
  }


  try {
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({
        success: false,
        message: "user not found",
      });
    }

    if(user.resetOtp === "" || user.resetOtp !== otp){
      return res.json({
        success:false , message:'invalid OTP'
      });
    }

    if(user.resetOtpExpireAt < Date.now()){
      return res.json({
        success:false , message:'otp Expired'
      });
    }


    const  hashedPassword  = await bcrypt.hash(newPassword , 10);

    user.password = hashedPassword;

    user.resetOtp = '';
    user.resetOtpExpireAt = 0;
    await user.save

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}