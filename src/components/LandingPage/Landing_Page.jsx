import React, { useEffect, useState } from "react";
import Template from "../../animation/template";
const     Landing_Page = ({ onStartClick,className }) => {

  return (
    // bg-gradient-to-r from-purple-600 to-blue-600
    <div className={`landing-page relative  h-screen text-white overflow-hidden ${className} `}>
      <div className="absolute inset-0">
        <img src="" />
        <div className="absolute inset-0 bg-white "></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight  text-black mb-4">
          <Template info={"Welcome to Our Awesome Website"} type={"words"} />
        </h1>
        <div className="text-lg text-black mb-8">
          <Template
            info={"Discover amazing features and services that await you."}
            type={"chars"}
          />
        </div>
        {/* <a href="#" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a> */}
        <button
          className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl bg-black hover:bg-white hover:text-black  hover:p-[10px] transition-all duration-300 ease-in-out"
          onClick={onStartClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing_Page;
