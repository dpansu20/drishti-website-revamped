import React from "react"

import Svnit from "../../images/svnit.webp"
import DrishtiNav from "../../images/drishti_white.webp"


function Options(props) {
    return (
        <a href={props.link}>
            {props.obj}
        </a>
    )
};


function Navbar(props) {
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
                {props.menus.map(
                    function(item, i){
                        return <Options obj={item.name} link={item.link} key={i} />;
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar;