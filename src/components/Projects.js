import React from "react";
import ProjectCard from "./ProjectCard.js";
import GanniMockImg from "./resources/ganniImg.PNG";
import BookFinderImg from "./resources/bookfinderImg.PNG";
import AirbnbMockImg from "./resources/airbnbImg.PNG";

function Projects () {
    const projArr = [
        {
            preview: GanniMockImg,
            repo: "https://github.com/m-strand/ganni-mockup-site",
            demo: "https://ganni-mockup-site.herokuapp.com/",
            langs: ["HTML", "CSS", "React.js"],
            name: "Ganni Mock Website"
        },
        {
            preview: BookFinderImg,
            repo: "https://github.com/m-strand/phase-1-final-project",
            demo: null,
            langs: ["HTML", "CSS", "Javascript"],
            name: "BookFinder"
        }, 
        {
            preview: AirbnbMockImg,
            repo: "https://github.com/m-strand/airbnb-mock-site",
            demo: "https://airbnb-mock-site.herokuapp.com/artic",
            langs: ["HTML", "CSS", "React.js"],
            name: "Airbnb Mock Website"
        }
    ]
    return (
        <div id="Projects" className="projects">
            <h2 className="section"><span className="section-text">PROJECTS</span></h2>
            {projArr.map((project) => {
                return(
                <ProjectCard preview={project.preview} repo={project.repo} langs={project.langs} name={project.name} />
                )
            })}
        </div>
    );
}

export default Projects;