import React from "react";
import CSSskill from "./resources/css_skill.png";
import HTMLskill from "./resources/html_skill.png";
import JSskill from "./resources/javascript_skill.png";
import ReactSkill from "./resources/React_skill.png";
import SQLskill from "./resources/SQL_skill.png";
import BootstrapSkill from "./resources/bootstrap.png";

function Skills () {
    return (
        <div id="Skills" className="skillsContainer">
            <h2 className="section"><span className="section-text">SKILLS</span></h2>
            <div className="skillCardSection">
              <div className="skillCard">
                <img src={HTMLskill} className="skillImg"/>
                <p className="skillName">HTML</p>
              </div>
              <div className="skillCard">
                <img src={CSSskill} className="skillImg"/>
                <p className="skillName">CSS</p>
              </div>
              <div className="skillCard">
                <img src={JSskill} className="skillImg"/>
                <p className="skillName">Javascript</p>
              </div>
              <div className="skillCard">
                <img src={ReactSkill} className="skillImg"/>
                <p className="skillName">React</p>
              </div>
              <div className="skillCard">
                <img src={SQLskill} className="skillImg"/>
                <p className="skillName">SQL</p>
              </div>
              <div className="skillCard">
                <img src={BootstrapSkill} className="skillImg"/>
                <p className="skillName">Bootstrap</p>
              </div>
            </div>
        </div>
    );
}

export default Skills;

