import React from "react"

import Svnit from "../images/svnit.png"
import DrishtiNav from "../images/drishti_white.png"

import "../css/navbar.css"

function Navbar() {
    return (
        <nav className="navBar">
            <div className="navBar-brand">
                <a href ="http://svnit.ac.in/" className="">
                    <img className="svnit-logo" src={Svnit} alt="SVNIT" />
                </a>
                <a href ="http://drishti-svnit.github.io/drishti/" className="drishti-contain">
                    <img className="drishti-logo" src={DrishtiNav} alt="Drishti" />
                </a>
            </div>
            <div className="navBar-menu">
                
            </div>
        </nav>
    )
}

export default Navbar;