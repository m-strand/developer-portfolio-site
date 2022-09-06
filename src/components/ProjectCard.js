import React from "react";

function ProjectCard ({preview, name, demo, repo, langs}) {
    return (
        <div className="projectCard">
                <h3 className="projectName">{name}</h3>
                <img src={preview} height="200px" width="400px"/>
                <div className="links">
                    {demo==null? null : <a className="projectLinks" href={demo}>DEMO</a>}
                    <a className="projectLinks" href={repo}>REPO</a>
                </div>
                <div className="langDiv">
                    {langs.map((lang) => {
                        return (
                        <p className="langs">{lang}</p>
                        )
                    }
                    )}
                </div>
        </div>
    )
}
export default ProjectCard;