import React from "react";

function SkillsCard ({skillImg, skillName}) {
    return (
        <div className="skillCard">
            <img src={skillImg} height="100px" weight="100px"/>
            <p className="skillName">{skillName}</p>
        </div>
    );
}
export default SkillsCard;