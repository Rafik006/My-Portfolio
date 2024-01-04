
import React from "react";
const Template = ({ info, className,type}) => {
  return (
    <div
    className={`${className?className:""}`}
    >
      {info}
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
