import React from "react"

import Navbar from "../components/Navbar"

import "../css/firstDiv.css"

import Hand from "../images/firstDiv/robo_hand.png"
import IndexCircle from "../images/firstDiv/index_circle.png"
import Quad from "../images/firstDiv/quadrilateral.png"
import ThumbCircle from "../images/firstDiv/thumb_circle.png"


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
                    </div>
                </div>
                <div className="right-sec">
                    
                </div>
            </div>
        </div>
    )
}

export default Drishti