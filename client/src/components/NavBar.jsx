import React from "react";
import { NavLink } from "react-router-dom";
import "../estilos/NavBar.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className= 'div-img'>
          <img src = 'https://api.iconify.design/fxemoji:videogame.svg' alt='logo' />
        </div>
        <div className="div-1">
          <NavLink to={"/home"}>Home</NavLink>
        </div>
        <div className="div-2">
          <NavLink to={"/home/create"}>Create Game</NavLink>
        </div>
        <div className="div-3">
          <NavLink to={"/home/about"}>About</NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}

// como creo un componente?
// import react from "react";
// defino si va a ser de clase o funcional
