// import React from 'react'
import { useState } from "react";
import { Mail, User, Lock, Eye, EyeOff } from "lucide-react";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

                <form className="space-y-4">
                    {/* Username */}
                    <div className="flex items-center border rounded-xl px-3 py-2">
                        <User className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border rounded-xl px-3 py-2">
                        <Mail className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border rounded-xl px-3 py-2">
                        <Lock className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="w-full outline-none"
                            required
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

                    {/* Confirm Password */}
                    <div className="flex items-center border rounded-xl px-3 py-2">
                        <Lock className="w-5 h-5 text-gray-500 mr-2" />
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className="w-full outline-none"
                            required
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup