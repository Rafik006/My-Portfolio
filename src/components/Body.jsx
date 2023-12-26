import React, { useEffect, useState } from "react";
import About_Me from "./About_Me";
import ExprienceSection from "./Education.jsx";
import RBK_Website from "../assets/Rbk_website.png";
import E_commerce from "../assets/E-commerce.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Template from "../animation/template";

const Body = () => {
  const [animateIn, setAnimateIn] = useState(false);


  useEffect(() => {
    setAnimateIn(true);
  }, []);
  const bodyClass = `body-container ${animateIn ? "zoom-in" : ""}`;
  return (
    <article
      className={`h-auto flex flex-col  gap-8 ${bodyClass}`}>
      <section id="about_me" className="flex-1 h-[100vh]">
        <About_Me />
      </section>

      <AnimationOnScroll animateIn="animate__backInUp">
        <section id="experience">
          <ExprienceSection />
          {/* <h1>hiii</h1> */}
        </section>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__backInUp">
        <section className="container mx-auto ">
          <Template
            info={"My Projects"}
            className={"text-3xl font-bold"}
            type="chars"
          />
          {/* <h1 className="text-3xl font-bold "> My Projects</h1> */}
          <div class="container flex gap-6 mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
            <article
              class="p-10 min-h-146 max-w-2xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundImage: `url(${RBK_Website})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div class="mt-20">
                <span class="text-xl">- </span>
                <span class="font-bold text-xl"></span>
              </div>
              <div class="mt-16 flex justify-between ">
                <span class="p-3 pl-0 font-bold"></span>

                <button className="font-[500] bg-black  text-white text-base border-solid border-2 border-primaryColor p-2   mt-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  <a href="#" target="_blank">
                    Visite website
                  </a>
                </button>
              </div>
            </article>
            <article
              class="p-10 min-h-116 max-w-2xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundImage: `url(${E_commerce})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 class="mt-5 text-4xl text-gray-100 leading-snug  min-h-33"></h1>
              <div class="mt-20">
                <span class="text-xl">- </span>
                <span class="font-bold text-xl"></span>
              </div>
              <div class="mt-16 flex justify-between ">
                <span class="p-3 pl-0 font-bold"></span>

                <button className="font-[500] bg-black  text-white text-base border-solid border-2 border-primaryColor p-2   mt-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  <a href="#" target="_blank">
                    Visite website
                  </a>
                </button>
              </div>
            </article>
            <article
              class="p-10 min-h-116 max-w-2xl w-full rounded-xl text-gray-100 xl:col-span-2 bg-center bg-cover transform duration-500 hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundImage: `url(${RBK_Website})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <h1 class="mt-5 text-4xl text-gray-100 leading-snug  min-h-33"></h1>
              <div class="mt-20">
                <span class="text-xl">- </span>
                <span class="font-bold text-xl"></span>
              </div>
              <div class="mt-16 flex justify-between ">
                <span class="p-3 pl-0 font-bold"></span>

                <button className="font-[500] bg-black  text-white text-base border-solid border-2 border-primaryColor p-2   mt-2 rounded-xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                  <a href="#" target="_blank">
                    Visite website
                  </a>
                </button>
              </div>
            </article>
          </div>
        </section>
      </AnimationOnScroll>
    </article>
  );
};

export default Body;
