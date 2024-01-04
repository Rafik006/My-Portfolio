import React, { useEffect, useState } from "react";
import About_Me from "./About_Me";
import ExprienceSection from "./Education.jsx";
import RBK_Website from "../assets/Rbk_website.png";
import E_commerce from "../assets/E-commerce.png";
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import Template from "../animation/template";
import Skills from "./Skills/Skills";
import Projects from "./projects/Projects";

const Body = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);
  const bodyClass = `body-container ${animateIn ? "zoom-in" : ""}`;
  return (
    <article className={`h-auto flex flex-col  gap-8 ${bodyClass}`}>
      <About_Me />

      <section className="bg-black h-auto w-screen flex flex-col justify-center items-center mt-[200px]">
        <h1 className="text-white text-3xl font-bold my-4 ">
          <Template info={"Skills"} type={"chars"} />
        </h1>
        <Skills />
      </section>

      <ExprienceSection />
      <Projects/>
    </article>
  );
};

export default Body;
