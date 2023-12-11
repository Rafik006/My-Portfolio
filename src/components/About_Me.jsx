import React from "react";
import Template from "../animation/template.jsx";
import cv  from "../assets/Mhadhbi_Rafik_Resume.pdf"
const About_Me = () => {
  return (
    <div className="w-11/12 h-28  mx-auto flex">
      <div className="flex min-h-screen  w-full">
        <div className="mx-auto">
          <div className="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
            <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
          </div>
          <h1 className="max-w-screen-sm text-center text-[55px] font-extrabold ">
            <Template info={" I do code and"} type={"chars"} />
            <br />
            <Template
             className="gradient-text"
             
              info={"Teaching it As well"}
              type={"chars"}
            />
          </h1>
          <div className="mx-auto mt-[40px] mb-[54px] text-[22px] font-light text-center max-w-lg">
            <Template
              type={"words"}
              info={
                "I am a seasoned full-stack software engineer with over 8 years  professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform."
              }
            />
          </div>
          <div className="text-center flex justify-around">
            <button className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
             <a href="mailto:rafikmhadhbi01@gmail.com">Get In Touch</a> 
            </button>
            <button className="font-[600] bg-black  text-white text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
             <a href={cv} target="_blank">Download CV</a> 
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Me;
