import React from "react";
import "./skills.css";
import Template from "../../animation/template.jsx"
const Skills = () => {
  return (
    <div class="containerr">
      <div class="skill-box">
        <span class="title"> <Template info={"HTML"} type={"chars"}/> </span>

        <div class="skill-bar">
          <span class="skill-per html">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title"><Template info={"CSS"} type={"chars"}/></span>

        <div class="skill-bar">
          <span class="skill-per css">
            <span class="tooltip">100%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title"><Template info={"javascript"} type={"chars"}/> </span>

        <div class="skill-bar">
          <span class="skill-per javascript">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>

      
      <div class="skill-box">
        <span class="title"><Template info={"React"} type={"chars"}/></span>

        <div class="skill-bar">
          <span class="skill-per React">
            <span class="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title"> <Template info={"Node Js"} type={"chars"}/></span>

        <div class="skill-bar">
          <span class="skill-per nodejs">
            <span class="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div class="skill-box">
        <span class="title"><Template info={"MYSQL"} type={"chars"}/></span>

        <div class="skill-bar">
          <span class="skill-per Mysql">
            <span class="tooltip">60%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
