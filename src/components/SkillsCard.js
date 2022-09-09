import React from "react";

function SkillsCard ({skillImg, skillName}) {
    return (
        <div className="skillCard">
            <img src={skillImg} className="skillImg"/>
            <p className="skillName">{skillName}</p>
        </div>
    );
}
export default SkillsCard;