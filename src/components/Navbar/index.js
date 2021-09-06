import React, { useState } from "react"

import Svnit from "../../images/svnit.webp"
import DrishtiNav from "../../images/drishti_white.webp"


const Options = (props) => {
    return (
        <li>
            <a href={props.link}>
                {props.obj}
            </a>
        </li>
    )
};



function Navbar(props) {

    var navHeight = (((window.innerHeight)/100)*25);

    const [styleChange, setStylechange] = useState(false);
    const changeNavbarStyle = () => {
        if (window.scrollY >= navHeight) {
            setStylechange(true);
        }
        else {
            setStylechange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarStyle);

    return (
        <nav className={styleChange ? "navChange" : "navBar"}>
            <div className="navBar-brand">
                <a href ="http://svnit.ac.in/" className="">
                    <img className="svnit-logo" src={Svnit} alt="SVNIT" />
                </a>
                <a href ="http://drishti-svnit.github.io/drishti/" className="drishti-contain">
                    <img className="drishti-logo" src={DrishtiNav} alt="Drishti" />
                </a>
            </div>
            <div className="navBar-menu">
                <ul>
                    {props.menus.map(
                        function(item, i){
                            return <Options obj={item.name} link={item.link} key={i} />;
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;