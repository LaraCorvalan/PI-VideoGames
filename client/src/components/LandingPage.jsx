import React from "react";
import "../estilos/LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // function handleOnClick(e){
  //     e.preventDefault();
  //     const navigate = useNavigate();
  //     navigate('/home')
  // }

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
            <btn className="button">PRESS START</btn>
          </Link>
        </div>
    </div>
  );
}

