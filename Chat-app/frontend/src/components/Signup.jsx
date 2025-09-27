// import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form"
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
        } = useForm()

        const password = watch("password","");
        const confirmPassword = watch("confirmPassword","");
        const validatePassword = (value) => {
            return value === password|| "Passwords do not match";
        }
        const onSubmit = (data) => {
            const userInfo = {
                name:data.username,
                email:data.email,
                password:data.password,
                confirmPassword:data.confirmPassword
            }
            axios.post()
            // vedio 2;19;10 sec
        }


        return (

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h1 className="text-blue-500 text-2xl font-bold text-center mb-1 ">Messanger</h1>
                    <h2 className="text-2xl font-bold text-center mb-2">Create  a  new <span className="text-blue-500"> Account</span></h2>


                    <form  onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Username */}
                        <div className="flex items-center border rounded-xl px-3 py-2 mb-0">
                            <User className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full outline-none"
                                
                                {...register("username", { required: true })}
                            />
                            
                        </div>
                         {errors.username && <span className='text-red-600'>**This field is required**</span>}

                        {/* Email */}
                        <div className="flex items-center border rounded-xl px-3 py-2 mb-0 mt-3">
                            <Mail className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full outline-none"
                               
                                {...register("email", { required: true })}
                            />
                            
                        </div>
                         {errors.email && <span className='text-red-600'>**This field is required**</span>}

                        {/* Password */}
                        <div className="flex items-center border rounded-xl px-3 py-2 mb-0 mt-3">
                            <Lock className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full outline-none"
                               
                                {...register("password", { required: true })}
                            />
                            
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-2"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <Eye className="w-5 h-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                         {errors.password && <span className='text-red-600'>**This field is required**</span>}

                        {/* Confirm Password */}
                        <div className="flex items-center border rounded-xl px-3 py-2 mb-0 mt-3">
                            <Lock className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full outline-none"
                               
                                {...register("confirmPassword", { required: true, validate:validatePassword })}
                            />
                             
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="ml-2"
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <Eye className="w-5 h-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword.message}</span>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition mt-3"
                        >
                            signUp
                        </button>
                        <p className="text-center mt-4"> have any Account? <span className="text-blue-500 ml-1 cursor-pointer">Login</span></p>
                    </form>
                </div>
            </div>
        );
    }


    export default Signup