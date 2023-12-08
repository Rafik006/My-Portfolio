import React from "react";

const Body = () => {
  return (
    <div className="w-11/12 h-28  mx-auto flex">
        <div class="flex min-h-screen  w-full">
          <div class="mx-auto">
            <div class="mx-auto mb-[40px] mt-[98px] h-[213px] w-[213px] overflow-hidden rounded-full bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              <img src="https://i.imgur.com/4U5tBXC.png" alt="" />
            </div>
            <h1 class="max-w-screen-sm text-center text-[55px] font-extrabold ">
              I do code and
              <br />
              
              <span class="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF8660] to-[#8000FF]">
              Teaching it As well   
              </span>
            </h1>
            <p class="mx-auto mt-[40px] mb-[54px] text-[22px] font-light text-center max-w-lg">
              I am a seasoned full-stack software engineer with over 8 years of
              professional experience, specializing in backend development. My
              expertise lies in crafting robust and scalable SaaS-based
              architectures on the Amazon AWS platform.
            </p>
            <div class="text-center flex justify-around">
              <button className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
                Get In Touch
              </button>
              <button className="font-[600] bg-black  text-white text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                Download CV
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Body;
