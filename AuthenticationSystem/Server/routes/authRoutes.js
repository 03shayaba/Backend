import express from 'express';
import { isAuthenticated, login, logout, register, resetPassword, sendResetOtp, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/user-auth.js';

export const authrouter = express.Router();

authrouter.post('/register' , register);
authrouter.post('/login' , login);
authrouter.post('/logout' , logout);
authrouter.post('/send-verify-otp' , userAuth, sendVerifyOtp);
authrouter.post('/verufy-account' , userAuth, verifyEmail);
authrouter.get('/is-auth' , userAuth, isAuthenticated);
authrouter.post('/send-reset-otp' , sendResetOtp);
authrouter.post('/reset-password',resetPassword);