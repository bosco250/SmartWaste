import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="fixed top-0 left-0 overflow-y-auto h-screen w-screen flex items-center justify-center bg-[#184b41]">
      <div className="rounded-lg shadow-custom p-5 max-w-md w-full flex flex-col justify-between bg-white text-[#184b41] ">
        <h1 className="text-2xl font-bold  text-center mb-6">
          Create Your Account
        </h1>
        
        <form className="flex flex-col space-y-2">
          <div>
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              placeholder="Enter full name"
              type="text"
              id="fullName"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block  text-sm font-bold mb-2"
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
            />
          </div>
          <div>
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="telephone"
            >
              Telephone Number
            </label>
            <input
              placeholder="Telephone"
              type="text"
              id="telephone"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="Enter strong pasword"
              type="password"
              id="password"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              placeholder="Retype your password"
              type="password"
              id="confirmPassword"
              className="shadow border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#184b41] hover:bg-gray-800 text-green-600  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center  text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-gray-500 hover:text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
