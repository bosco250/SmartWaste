import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[#184b41] text-white min-h-screen px-8 flex  justify-center items-center pt-[13vh] ">
      <div className="flex flex-col items-center justify-center text-center md:w-3/4">
      <h1 className="text-4xl font-bold mb-10 w-4/5">Optimize Waste Management with SmartWaste</h1>
      <p className="text-2xl mb-10 ">
        SmartWaste helps streamline waste collection and management with real-time tracking and route optimization. 
        Join us in creating a cleaner future—use SmartWaste for efficient, sustainable waste management.
      </p>
      <Link to='/login' className="bg-white text-green-600 font-semibold py-2 px-4  rounded hover:bg-gray-200">
        Get Started
      </Link>
      </div>
    </div>
  );
};

export default Hero;
