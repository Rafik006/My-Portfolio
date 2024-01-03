import React, { useEffect, useState } from "react";
import About_Me from "./About_Me";
import ExprienceSection from "./Education.jsx";
import RBK_Website from "../assets/Rbk_website.png";
import E_commerce from "../assets/E-commerce.png";
import "animate.css/animate.min.css";
// import { AnimationOnScroll } from "react-animation-on-scroll";
import Template from "../animation/template";
import Cards from "../animation/project_card/Cards";
import Skills from "./Skills/Skills";

const Body = () => {
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);
  const bodyClass = `body-container ${animateIn ? "zoom-in" : ""}`;
  return (
    <article className={`h-auto flex flex-col  gap-8 ${bodyClass}`}>
      <section id="about_me" className="flex-1 h-[100vh]">
        <About_Me />
      </section>

      {/* <AnimationOnScroll animateIn="animate__backInUp"> */}
        <section className="bg-black h-auto w-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl font-bold my-4 ">
            <Template info={"Skills"} type={"chars"} />
          </h1>
          <Skills />
        </section>
      {/* </AnimationOnScroll> */}
      {/* <AnimationOnScroll animateIn="animate__backInUp"> */}
        <section id="experience" className="flex flex-col items-center ">
          <ExprienceSection />
        </section>
      {/* </AnimationOnScroll> */}
      {/* <AnimationOnScroll animateIn="animate__backInUp"> */}
        <section className="container mx-auto ">
          <Template
            info={"My Projects"}
            className={"text-3xl font-bold"}
            type="chars"
          />
          {/* <h1 className="text-3xl font-bold "> My Projects</h1> */}
          <div class="container w-screen flex  items-center  justify-center  flex-wrap  gap-6 mx-auto  md:py-10  md:px-0 ">
            <Cards img_src={RBK_Website} project_name={"RebootKamp Website"} />
            <Cards img_src={E_commerce} project_name={"E-commerce Website"} />

            <Cards img_src={E_commerce} project_name={"E-commerce Website"} />

            <Cards img_src={RBK_Website} project_name={"RebootKamp Website"} />
          </div>
        </section>
      {/* </AnimationOnScroll> */}
    </article>
  );
};

export default Body;
