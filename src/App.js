import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from "./pages/Home/"
import Teams from "./pages/Team/"




const App = () => {
  
  return (
    <Router>
        <Switch>
          <Route exact path="/drishti-website-revamped" component= {Home} />
          <Route path = "/drishti-website-revamped/home" component = {Home} />
          <Route path = "/drishti-website-revamped/team" component = {Teams} />

          <Redirect to="/drishti-website-revamped" />
        </Switch>
    </Router>
  );
}

export default App;
