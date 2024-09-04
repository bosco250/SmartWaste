import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center py-12 px-8 bg-gray-100 min-h-screen pt-24">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6">
          About SmartWaste
        </h1>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          SmartWaste is at the forefront of modern waste management solutions,
          dedicated to enhancing efficiency and sustainability in waste collection
          and processing. Our platform empowers municipalities and waste
          management companies with advanced tools for real-time tracking, route
          optimization, and comprehensive analytics to revolutionize waste
          management practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where waste management is seamless, efficient,
              and environmentally friendly. Our goal is to lead the way in
              creating smart cities with cutting-edge waste management solutions
              that promote sustainability and improve the quality of urban life.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Our Mission
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Provide municipalities with state-of-the-art tools for efficient
                waste management.
              </li>
              <li>
                Enhance operational efficiency through real-time data and route
                optimization.
              </li>
              <li>Promote sustainable practices through advanced analytics.</li>
              <li>
                Support environmental conservation with innovative waste
                management solutions.
              </li>
              <li>
                Empower communities with accessible and effective waste
                management services.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            SmartWaste stands out with its commitment to transforming waste
            management through technology and innovation. Our platform offers
            unparalleled insights and tools that streamline operations, improve
            efficiency, and support environmental sustainability. Choose
            SmartWaste for a smarter, greener future in waste management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
