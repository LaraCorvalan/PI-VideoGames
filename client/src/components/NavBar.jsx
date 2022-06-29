import React from "react";
import { NavLink } from "react-router-dom";
import "../estilos/NavBar.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        {/* <div className= 'div-img'>
          <img src = 'https://api.iconify.design/fxemoji:videogame.svg' alt='logo'/>
        </div> */}
        
        <button className="btn-1">
          <NavLink to={"/home"}  style={{textDecoration:"none"}}>Home</NavLink>
        </button>
        <button className="btn-2">
          <NavLink to={"/home/create"}  style={{textDecoration:"none"}}>Create Game</NavLink>
        </button>
        <button className="btn-3">
          <NavLink to={"/home/about"}  style={{textDecoration:"none"}}>About</NavLink>
        </button>
      </nav>
    </React.Fragment>
  );
}

// como creo un componente?
// import react from "react";
// defino si va a ser de clase o funcional
