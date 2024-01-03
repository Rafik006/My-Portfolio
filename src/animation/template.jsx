import AnimatedText from "react-animated-text-content";

import React from "react";
const Template = ({ info, className, type }) => {
  return (
    <AnimatedText
      type={type} // animate words or chars
      animation={{
        x: "200px",
        y: "-20px",
        scale: 1.1,
        ease: "ease-in-out",
      }}
      animationType="float"
      interval={0.06}
      duration={0.8}
      tag="span"
      className={`${className} animated-paragraph`}
      includeWhiteSpaces
      threshold={0.2}
      rootMargin="10%"
    >
      {info}
    </AnimatedText>
  );
};

export default Template;

var Comp1 = ({ children }) => {
  return <div> {children} </div>;
};

var Comp3 = () => {
  return <h1>Hello !</h1>;
};

var Comp2 = () => {
  return (
    <div>
      <Comp1>
        <h1>Test !</h1>
        <Comp3 />
      </Comp1>
    </div>
  );
};
