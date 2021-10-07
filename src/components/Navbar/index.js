import React, { useState } from "react"
import {Link} from "react-router-dom"
import {HashLink} from "react-router-hash-link"

import classnames from "classnames"    // For using multiple classes in an element

import Svnit from "../../images/svnit.webp"
import DrishtiNavBlack from "../../images/drishti_black.webp"
import DrishtiNavWhite from "../../images/drishti_white.webp"


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
    } else {
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

    var drishtiImage;
    var navMenu;
    if (props.theme === "Dark") {
        drishtiImage = DrishtiNavBlack;
        navMenu = 'dark';
    } else if (props.theme === "Light") {
        drishtiImage = DrishtiNavWhite;
        navMenu = 'light';
    }

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
                    <img className="drishti-logo" src={drishtiImage} alt="Drishti" />
                </a>
            </div>
            <div className={classnames('navBar-menu', navMenu)}>
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