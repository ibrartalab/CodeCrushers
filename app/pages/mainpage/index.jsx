import React from "react";
import { FaCode, FaLaptopCode, FaUsers } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-green-400 h-screen flex flex-col justify-center items-center text-white">
      <div className="text-4xl font-bold mb-4">Welcome to CodeCrushers</div>
      <p className="text-xl text-center mb-8">
        Your trusted partner in web development and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg text-center bg-white text-gray-800">
          <FaCode className="text-4xl mb-2 mx-auto" />
          <p className="font-bold">Web Development</p>
          <p>High-quality websites and web applications.</p>
        </div>
        <div className="p-4 border rounded-lg text-center bg-white text-gray-800">
          <FaLaptopCode className="text-4xl mb-2 mx-auto" />
          <p className="font-bold">Custom Solutions</p>
          <p>Bespoke software tailored to your needs.</p>
        </div>
        <div className="p-4 border rounded-lg text-center bg-white text-gray-800">
          <FaUsers className="text-4xl mb-2 mx-auto" />
          <p className="font-bold">Team Collaboration</p>
          <p>Working together to achieve your goals.</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
