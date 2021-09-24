import React, { useState } from "react"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

import Svnit from "../../images/svnit.webp"
import DrishtiNav from "../../images/drishti_white.webp"


const Options = (props) => {
    if (props.type === "1") {
        return (
            <li>
                <Link to={props.link}>
                    {props.obj}
                </Link>
            </li>
        )
    } else if (props.type === "0") {
        return (
            <li>
                <HashLink to={props.link}>
                    {props.obj}
                </HashLink>
            </li>
        )
    }
    
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
                            return <Options obj={item.name} link={item.link} type={item.type} key={i} />;
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;