import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home/"
import Teams from "./pages/Team/"




function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route path = "/home" component = {Home} />
        <Route path = "/drishti-website-revamped" component = {Home} />
        <Route path = "/team" component = {Teams} />
      </Switch>
    </Router>
  );
}

export default App;
