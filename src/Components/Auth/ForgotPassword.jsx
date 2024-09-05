import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="fixed top-0 left-0 overflow-y-auto h-screen w-screen flex items-center justify-center bg-[#184b41]">
      <div className="rounded-lg shadow-custom p-5 max-w-md w-full flex flex-col justify-between bg-white text-[#184b41]">
        <h1 className="text-2xl font-bold text-center mb-6">
          Forgot Your Password?
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Enter your email address to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#184b41] hover:bg-gray-800 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Reset Link
          </button>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-gray-500 hover:text-blue-500"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
