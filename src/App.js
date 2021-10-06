import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from "./pages/Home/"
import Teams from "./pages/Team/"
import Notices from "./pages/Notices/"
import Gallery from "./pages/Gallery/"
import Achievements from "./pages/Achievements/"
import Events from "./pages/Events/"
import Projects from "./pages/Projects/"




const App = () => {
  
  return (
    <Router>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route path = "/home" component = {Home} />
          <Route path = "/team" component = {Teams} />
          <Route path = "/notice" component = {Notices} />
          <Route path = "/gallery" component = {Gallery} />
          <Route path = "/projects" component = {Projects} />
          <Route path = "/events" component = {Events} />
          <Route path = "/achievements" component = {Achievements} />

          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
