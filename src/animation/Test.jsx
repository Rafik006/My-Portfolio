import React from "react";


export default function Animation ({info,type,className}) {
 

  return (
    <div
      
    >
      <div className={`container ${className?className:""}`}>
      {info}
      </div>
    
    </div>
  );
}
