import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Log from "../../assets/Logo.png";
import { FaXmark } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
  className="md:fixed md:w-full top-0 left-0 bg-[#184b41] z-10
    py-[30px] px-[50px] md:flex items-center justify-center text-gray-200 h-[13vh]"
>
      <div className="md:flex md:flex-row gap-10 justify-between items-center w-full hidden">
        <div className="flex md:flex-row flex-1 justify-between items-center md:gap-[100px]">
          <div className="flex justify-center items-center">
            <img className="w-8 h-10 object-fill rounded-sm mr-5" src={Log} alt="" />
            <h1 className="font-roboto leading-10 font-bold text-[38px]">
              SmartWaste
            </h1>
          </div>
          <div>
            <ul className="nav-items flex md:flex-row list-none text-[20px]
            gap-[5px] justify-center items-center font-bold leading-6">
              <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"><Link to='/'>Home</Link></li>
              <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"> <Link to='/about'>About</Link> </li>
              <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"><Link to='/dashboard'>Dashboard</Link> </li>
              <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200">Projects</li>
              <li className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200">Routes</li>
              <li  className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"><IoIosNotifications className="h-6 w-6" />              </li>
            </ul>
          </div>
        </div>
        
      </div>
      {/* For Mobile navBar */}
      <div
        className="flex flex-row md:hidden fixed top-0 left-0
      justify-between items-center h-24 z-10 w-full px-5 bg-[#184b41]"
      >
        <div className="flex justify-center items-center">
          <img className="w-8 h-10 object-fill" src={Log} alt="" />
          <h1 className="font-roboto leading-10 font-bold text-[38px]">
            SmartWaste
          </h1>
        </div>
        <div className="flex gap-6">
          <button onClick={toggleIsOpen} className="">
            {isOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* mobile items */}
      <div
        className={`fixed bg-[#184b41] z-10 h-full py-7 top-24 left-0
            ${
              isOpen ? " w-full transition-all ease-out duration-500" : "hidden"
            } `}
      >
        <ul 
          className={`nav-items flex flex-col list-none text-[20px]
            gap-[25px] justify-center px-6 font-bold leading-6`}
        >
          <li onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"><Link to='/'>Home</Link> </li>
          <li onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"> <Link to='/about'>About</Link> </li>
          <li onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200"><Link to='/dashboard'>Dashboard</Link> </li>
          <li onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200">Projects</li>
          <li onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200">Routes</li>
          <li onClick={()=>setIsOpen(!isOpen)} className=" cursor-pointer px-3 py-2 rounded-md hover:bg-green-700 hover:text-green-200">Notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
