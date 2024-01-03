import AnimatedText from "react-animated-text-content";

import React from "react";
const Template = ({ info, className, type }) => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <AnimatedText
        type="chars"
        animation={{
          x: "200px",
          y: "-20px",
          scale: 1.5,
          ease: "ease-in-out",
        }}
        animationType="rifle"
        interval={0.1}
        duration={0.9}
        tag="p"
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Welcome To , Beji's Portfolio
      </AnimatedText>
    </div>
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
