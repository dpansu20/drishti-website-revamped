import React from "react"
import classnames from "classnames"
import Typed from "react-typed"
import "react-typed/dist/animatedCursor.css"

import Navbar from "../components/Navbar"

import "../css/firstDiv.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Hand from "../images/firstDiv/robo_hand.avif"
import IndexCircle from "../images/firstDiv/index_circle.avif"
import Quad from "../images/firstDiv/quadrilateral.avif"
import ThumbCircle from "../images/firstDiv/thumb_circle.avif"
import Striped from "../images/firstDiv/striped.avif"


function Drishti(props) {
    return (
        <div className="first-div">

            <Navbar menus={props.nav} />

            <div className="container">
                <div className="left-sec">
                    <div className="robotic">
                        <img className="robo-hand" src={Hand} alt="Robotic Arm" />
                        <img className="index-circle" src={IndexCircle} alt="Circle" />
                        <img className="quadrilateral" src={Quad} alt="Square" />
                        <img className="thumb-circle" src={ThumbCircle} alt="Circle" />
                        <img className="striped" src={Striped} alt="Striped Circle" />
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
                            Important Notices 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FontAwesomeIcon icon="info-circle" className="imp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drishti