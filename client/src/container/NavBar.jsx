import React from 'react';
import "./NavBar.css";
import logo from "../images/logo1.png";
import profile from "../images/Title_MM_transparent.PNG";
// import profile from "../images/profile.png";

function NavBar({ logedInSignUpUser }) {
    return (
        <div className="nav">
            <img className="profileLogo" src={logo} alt={"MovieFlix Logo"} />
            <h4 className="NavUser" >{logedInSignUpUser}</h4>
            <img className="NavLogo" src={profile} alt={"My Profile"} />
        </div>
    )
}

export default NavBar
