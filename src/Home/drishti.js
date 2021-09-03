import React from "react"
import classnames from "classnames"
import Typed from "react-typed"
import "react-typed/dist/animatedCursor.css"

import Navbar from "../components/Navbar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hand from "../images/firstDiv/robo_hand.webp"
import IndexCircle from "../images/firstDiv/index_circle.webp"
import Quad from "../images/firstDiv/quadrilateral.webp"
import ThumbCircle from "../images/firstDiv/thumb_circle.webp"
import Striped from "../images/firstDiv/striped.webp"
import Arrow from "../images/firstDiv/arrow.gif"



function Drishti(props) {
    return (
        <div className="first-div">

            <Navbar menus={props.nav} />

            <div className="container">
                <div className="left-sec">
                    <div className="robotic">
                        <img className="robo-hand translate-robo" src={Hand} alt="Robotic Arm" />
                        <img className="index-circle zoom-index" src={IndexCircle} alt="Circle" />
                        <img className="quadrilateral rotate-quad" src={Quad} alt="Square" />
                        <img className="thumb-circle translate-thumb" src={ThumbCircle} alt="Circle" />
                        <img className="striped rotate-fade-strip" src={Striped} alt="Striped Circle" />
                    </div>
                </div>
                <div className="right-sec">
                    <div className="title">
                        <h1>Drishti</h1>
                        <Typed className="typed" strings={[
                            'A Revolutionary Concept',
                            'Where We comes before Me!']}
                            typeSpeed={45}
                            backSpeed={15}
                            loop >
                        </Typed>

                        <a className="explore" href="#about">
                            Explore 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            <FontAwesomeIcon icon="chevron-down" className="down" />
                        </a>
                        <br/>
                        <a className={classnames('notices', props.notice[1])} href={props.notice[0]}>
                            <span className="before">Important Notices</span>
                            <span className="after">Exciting News coming up!!</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src={Arrow} alt="pointing arrow" />
                            <FontAwesomeIcon icon="info-circle" className="imp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drishti