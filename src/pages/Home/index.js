import React from "react"

import Drishti from "./drishti"
import About from "./about.jsx"
import Gallery from "./gallery.jsx"
import Event from "./event.jsx"
import Project from "./project.jsx"
// import Footer from "./components/Footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronDown, faInfoCircle)

// Set this status value to 1, when notifying about new event, or some recent achievements Drishti.
// Revert the value to 0, when notice is no more valid, or the event is over.
var newStatus = 1;


// Route links and Options for Homepage
let homeNav = [
  {
    name: "Home",
    link: "#",
    type: "0"
  }, 
  {
    name: "About Us",
    link: "#about",
    type: "0"
  },
  {
    name: "Gallery",
    link: "#gallery",
    type: "0"
  },
  {
    name: "Projects",
    link: "#projects",
    type: "0"
  },
  {
    name: "Team",
    link: "/team",
    type: "1"
  },
  {
    name: "Contact",
    link: "#footer",
    type: "0"
  }];





function Home() {
  
  if (newStatus === 1){
    var notice = ["/notice","blink"];
  }
  else{
    notice = ["#","nopop"];
  }

  return (
    <div className="main">
      <Drishti nav={ homeNav } notice={notice} />
      <About />
      <Gallery />
      <Event />
      <Project />
    </div>
  );
}

export default Home;
