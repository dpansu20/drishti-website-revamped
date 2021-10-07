import React from "react"

import AllTeams from "./allteams.jsx"
import Navbar from "../../components/Navbar"


// FontAwesome imports

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faChevronDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faChevronDown, faInfoCircle)



// Route links and Options for Teams page
let teamNav = [
  {
    name: "Home",
    link: "/",
    type: "1"
  }, 
  {
    name: "Faculty",
    link: "/faculty",
    type: "1"
  },
  {
    name: "Members",
    link: "#",
    type: "2"
  },
  {
    name: "Developers",
    link: "/developers",
    type: "1"
  },
  {
    name: "Contact",
    link: "/#footer",
    type: "0"
  }];





function Teams() {
  return (
    <div className="main">
      <Navbar menus={ teamNav } theme="Dark" />
      <AllTeams />
    </div>
  );
}

export default Teams;