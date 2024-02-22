import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Animation({ info, type, className }) {
  return (
    // <ScrollAnimation animateIn="animate__backInDown">
<div className={`container ${className ? className : ""}`}>{info}</div>
// </ScrollAnimation>
    // <div>
    //   
    // </div>
  );
}

