import React from 'react';
import "./NavBar.css";
import logo from "../images/logo1.png";
import profile from "../images/Title_MM_transparent.PNG";
// import profile from "../images/profile.png";

function NavBar() {
    return (
        <div className="nav">
            <img className="NavLogo" src={logo} alt={"MovieFlix Logo"} />
            <img className="profileLogo" src={profile} alt={"My Profile"} />
        </div>
    )
}

export default NavBar
