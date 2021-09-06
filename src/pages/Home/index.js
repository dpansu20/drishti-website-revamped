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
    link: "#"
  }, 
  {
    name: "About Us",
    link: "#about"
  },
  {
    name: "Gallery",
    link: "#gallery"
  },
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Team",
    link: "/drishti-website-revamped/team"
  },
  {
    name: "Contact",
    link: "#footer"
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
