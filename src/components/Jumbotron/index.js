import React from "react";
import Nav from "../Nav"
import "./style.css"

function Jumbotron(props) {

  return (
    <div className="jumbotron jumbotron-fluid p-5">
      <h1 className="display-1"><b>SpeakEasy</b></h1>
      <p className="lead">A cocktail app to look up and try new drinks! You can search by name or ingredient! click on the drink to
      get all the ingredients, measurements, and instructions</p>
    </div>
  )
}
export default Jumbotron;