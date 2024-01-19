import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./template";
import "./style.css";


export default function Test({info,type,className}) {
  // console.log("text",info )
  // console.log("type",type )
  // const [replay, setReplay] = useState(true);
  // // Placeholder text data, as if from API
  // const placeholderText = [
  //   { type: type , text: info }
  //   // {
  //   //   type: "heading2",
  //   //   text: "Animating responsive text!"
  //   // }
  // ];
  // const container = {
  //   visible: {
  //     transition: {
  //       staggerChildren: 0.025
  //     }
  //   }
  // };

  // // Quick and dirt for the example
  // const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };

  return (
    <div
      
    >
      <div className={`container ${className?className:""}`}>
      {info}
      </div>
    
    </div>
  );
}
