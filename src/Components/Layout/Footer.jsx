import React from "react";
import { FaFacebookF, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-2 px-8 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul>
              <li>Background</li>
              <li>Mission</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Media</h3>
            <ul>
              <li>Event</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="list-disc pl-5">
              <li>Waste Collection</li>
              <li>Route Optimization</li>
              <li>Resource Management</li>
              <li>Real-Time Tracking</li>
              <li>Reporting & Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul>
              <li>Address: KN 1 ST Nyarugenge</li>
              <li>Email: info@smartwaste.rw</li>
              <li>Tel: (+250) 786 946 188</li>
              <li>P.Box: Kigali / Rwanda</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col mt-10">
        <div className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-1.5 border rounded-md text-[13px] focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
          <button className="bg-green-600 text-white px-4 ml-4 py-2 rounded-md text-[13px] hover:bg-green-900">
            Subscribe
          </button>
        </div>
        <hr className="my-8 border-gray-300 w-full" />
        <div className="text-gray-400 text-sm">
          <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div className="flex  space-x-4 mt-2">
              <Link to="" className="hover:text-purple-900">
                Privacy Policy
              </Link>
              <Link to="" className="hover:text-purple-900">
                Terms of Service
              </Link>
              <Link to="" className="hover:text-purple-900">
                Contact Us
              </Link>
            </div>
            <p>
              &copy; {new Date().getFullYear()} XCodes. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xl ">
              <Link to="" className="hover:text-blue-700">
                <FaFacebookF />
              </Link>
              <Link to="" className="hover:text-blue-500">
                <FaTwitter />
              </Link>
              <Link to="" className="hover:text-red-500">
                <FaMapMarkerAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
