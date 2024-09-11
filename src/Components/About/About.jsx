import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center py-12 px-8 bg-gray-100 min-h-screen pt-24">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#184b41] mb-6">
          About SmartWaste
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          SmartWaste is a cutting-edge waste management platform designed to
          revolutionize the way communities handle waste. Our mission is to
          enhance environmental sustainability and efficiency by providing
          innovative waste management solutions that are accessible, effective,
          and user-friendly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-[#184b41] mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We aspire to be a leader in waste management solutions, promoting
              a cleaner and healthier environment through smart technology,
              optimized waste processing, and community engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-[#184b41] mb-4">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Deliver advanced waste management solutions that enhance
                environmental sustainability.
              </li>
              <li>
                Provide tools and technologies for efficient waste collection,
                processing, and recycling.
              </li>
              <li>
                Engage with communities to promote waste reduction and proper
                disposal practices.
              </li>
              <li>
                Support local governments and organizations with data-driven
                insights for better waste management.
              </li>
              <li>
                Foster innovation and continuous improvement in waste management
                practices.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-[#184b41] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At SmartWaste, we are dedicated to transforming waste management for
            a better future. Our platform integrates cutting-edge technology
            with practical solutions, ensuring that waste is managed efficiently
            and sustainably. With our user-friendly interface and commitment to
            innovation, we provide reliable and effective solutions for both
            communities and organizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
