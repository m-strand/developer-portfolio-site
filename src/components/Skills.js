import React from "react";
import SkillsCard from "./SkillsCard.js";
import CSSskill from "./resources/css_skill.png";
import HTMLskill from "./resources/html_skill.png";
import JSskill from "./resources/javascript_skill.png";
import ReactSkill from "./resources/React_skill.png";
import SQLskill from "./resources/SQL_skill.png";
import BootstrapSkill from "./resources/bootstrap.png";

function Skills () {
    const skillsArr = [
      {
        "img": HTMLskill,
        "name": "HTML"
      }, 
      {
        "img": CSSskill,
        "name": "CSS"
      }, 
      {
        "img": BootstrapSkill,
        "name": "Bootstrap"
      }, 
      {
        "img": JSskill,
        "name": "Javascript"
      }, 
      {
        "img": ReactSkill,
        "name": "React"
      },
 
      {
        "img": SQLskill,
        "name": "SQL"
      }
    ]
    return (
        <div id="Skills" className="skillsContainer">
            <h2 className="section"><span className="section-text">SKILLS</span></h2>
            <div className="skillCardSection">
            {skillsArr.map((skill) => {
                return (
                    <SkillsCard skillImg={skill.img} skillName={skill.name} />
                )
            })}
            </div>
        </div>
    );
}

export default Skills;

