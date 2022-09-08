import React from "react";
import GanniMockImg from "./resources/ganniImg.PNG";
import BookFinderImg from "./resources/bookfinderImg.PNG";
import AirbnbMockImg from "./resources/airbnbImg.PNG";

function Projects () {
    return (
        <div id="Projects" className="projects">
            <h2 className="section"><span className="section-text">PROJECTS</span></h2>

            <div className="projectCard">
                <h3 className="projectName">Ganni Mock Website</h3>
                <img src={GanniMockImg} height="200px" width="400px"/>
                <div className="links">
                    <a className="projectLinks" href="https://ganni-mockup-site.herokuapp.com/">DEMO</a>
                    <a className="projectLinks" href="https://github.com/m-strand/ganni-mockup-site">REPO</a>
                </div>
                <div className="langDiv">
                    <p className="langs">HTML</p>
                    <p className="langs">CSS</p>
                    <p className="langs">React.js</p>
                </div>
        </div>

        <div className="projectCard">
                <h3 className="projectName">BookFinder</h3>
                <img src={BookFinderImg} height="200px" width="400px"/>
                <div className="links">
                    <a className="projectLinks" href="https://github.com/m-strand/phase-1-final-project">REPO</a>
                </div>
                <div className="langDiv">
                    <p className="langs">HTML</p>
                    <p className="langs">CSS</p>
                    <p className="langs">Javascript</p>
                </div>
        </div>

        <div className="projectCard">
                <h3 className="projectName">Airbnb Mock Website</h3>
                <img src={AirbnbMockImg} height="200px" width="400px"/>
                <div className="links">
                    <a className="projectLinks" href="https://airbnb-mock-site.herokuapp.com/artic">DEMO</a>
                    <a className="projectLinks" href="https://github.com/m-strand/airbnb-mock-site">REPO</a>
                </div>
                <div className="langDiv">
                    <p className="langs">HTML</p>
                    <p className="langs">CSS</p>
                    <p className="langs">React.js</p>
                </div>
        </div>
    </div>
    );
}

export default Projects;