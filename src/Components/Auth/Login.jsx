import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="fixed top-0 left-0 overflow-y-auto h-screen w-screen flex items-center justify-center bg-[#184b41] ">
      <div className="rounded-lg shadow-custom p-5 max-w-md w-full flex flex-col justify-between bg-white text-[#184b41] ">
        <h1 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h1>
        <form className="flex flex-col space-y-2">
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="Enter valid email"
              type="email"
              id="email"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="Enter strong password"
              type="password"
              id="password"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#184b41] hover:bg-gray-800 text-green-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-gray-500 hover:text-blue-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
