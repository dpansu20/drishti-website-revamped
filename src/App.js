import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import Home from "./pages/Home/"
import Teams from "./pages/Team/"




const App = () => {
  
  return (
    <Router>
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route path = "/home" component = {Home} />
          <Route path = "/team" component = {Teams} />

          <Redirect to="/" />
        </Switch>
    </Router>
  );
}

export default App;
