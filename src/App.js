import React from "react"

import Drishti from "./Home/drishti"
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
    link: "/"
  }, 
  {
    name: "About Us",
    link: "#about"
  },
  // {
  //   name: "Events",
  //   link: "/events"
  // },
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Team",
    link: "/team"
  },
  {
    name: "Contact",
    link: "#footer"
  }];





function App() {
  
  if (newStatus === 1){
    var notice = ["/notice","blink"];
  }
  else{
    notice = ["#","nopop"];
  }

  return (
    <div className="">
      <Drishti nav={ homeNav } notice={notice} />
    </div>
  );
}

export default App;
