import React from "react";
import "../estilos/LandingPage.css";
import { Link } from "react-router-dom";


export default function LandingPage() {
    
  return (
    <div className="container">
        {/* <div id= 'h1'> */}
          <h1 className="title-1">IT'S TIME TO PLAY</h1>
          {/* <br/>
          <h1 className="title-2">TO PLAY</h1> */}
        {/* </div> */}
        <br/>
        <div id="button-container">
          <Link to="/home" style={{textDecoration:"none"}}>
            <button className="button">PRESS START</button>
          </Link>
        </div>
    </div>
  );
}

