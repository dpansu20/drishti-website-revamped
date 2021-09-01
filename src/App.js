import React from "react"

import Drishti from "./Home/drishti"
// import Footer from "./components/Footer"



let homeNav = [
  {
    name: "Home",
    link: "/"
  }, 
  {
    name: "About Us",
    link: "#about"
  },
  {
    name: "Events",
    link: "/events"
  },
  {
    name: "Projects",
    link: "/projects"
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
  return (
    <div className="">
      <Drishti nav={ homeNav } />
    </div>
  );
}

export default App;
