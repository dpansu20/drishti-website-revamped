import React from "react"
import ReactDOM from "react-dom"

import "./css/style.css"

import App from "./App"



window.addEventListener("beforeunload", () => {
    window.localStorage.setItem(
      `lastKnown_${window.location.href}`,
      JSON.stringify({
        data: document.getElementById("content").innerHTML
      })
    );
  });





if (window.hasRestoredState) {
    ReactDOM.hydrate(<App />, document.getElementById('root'));
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}


