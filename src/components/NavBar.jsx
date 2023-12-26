import React from "react";

const NavBar = ({onStartClick}) => {
  return (
    <header className="w-full  h-28 flex items-center justify-around border-b-2 shadow-lg sticky top-0 bg-white z-10">
      <img
        src="https://www.bobolink.co/storage/news/March2019/Logo.png"
        className="h-28 w-28  cursor-pointer"
        onClick={onStartClick}
      />
    <ul className="flex w-[450px] h-28 justify-between items-center font-[500] text-2xl    ">
        <li className="cursor-pointer hover:text-primaryColor"><a href="#about_me">Home</a></li>
        <li className="cursor-pointer hover:text-primaryColor"><a href="#">Portfolio</a></li>
        <li className="cursor-pointer hover:text-primaryColor"><a href="#about_me">About me</a></li>
        <li className="cursor-pointer hover:text-primaryColor"><a href="#experience">Experiences</a></li>
    </ul>
    <button className="font-[600]  text-xl border-solid border-2 border-primaryColor p-4 rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-in-out"><a href="mailto:rafikmhadhbi01@gmail.com">Contact Me</a> </button>
    </header>
  );
};

export default NavBar;
