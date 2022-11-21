import React from "react";
import { HashLink } from 'react-router-hash-link';

function NavBar () {
    return (
        <div className="navBar"> 
            <div className="logo">
                <h2>
                    <div className="lastname">
                        B
                        R
                        O
                        O
                        K
                        E
                    </div>
                    <div className="lastname">
                        S
                        T
                        R
                        A
                        N
                        D
                    </div>
                    <img src="https://cdn-icons-png.flaticon.com/512/4498/4498584.png" height="25px" width="25px" className="logoIcon"/>
                </h2>

            </div>
  
            <div className="nav">
                <HashLink className="navLink selected" smooth to="/#AboutMe">ABOUT</HashLink>
                <HashLink className="navLink" smooth to="/#UXProjects">UX PROJECTS</HashLink>
                <HashLink className="navLink" smooth to="/#DevProjects">DEV PROJECTS</HashLink>
                <HashLink className="navLink" smooth to="/#Skills">SKILLS</HashLink>
                <HashLink className="navLink bounce-text" smooth to="/#ContactForm">
                    <div className="c">C</div>
                    <div className="o">O</div>
                    <div className="n">N</div>
                    <div className="t">T</div>
                    <div className="a">A</div>
                    <div className="c">C</div>
                    <div className="t">T</div>
                </HashLink>
            </div>
        </div>
    )
}

export default NavBar;