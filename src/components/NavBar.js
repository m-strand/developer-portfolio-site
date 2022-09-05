import React from React.js;
import { NavLink } from "react-router-dom";

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
                <NavLink className="navLink selected" to="/AboutMe">ABOUT</NavLink>
                <NavLink className="navLink" to="/Projects">PROJECTS</NavLink>
                <NavLink className="navLink" to="/Skills">SKILLS</NavLink>
                <NavLink className="navLink bounce-text" to="/ContactForm">
                    <div className="c">C</div>
                    <div className="o">O</div>
                    <div className="n">N</div>
                    <div className="t">T</div>
                    <div className="a">A</div>
                    <div className="c">C</div>
                    <div className="t">T</div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;