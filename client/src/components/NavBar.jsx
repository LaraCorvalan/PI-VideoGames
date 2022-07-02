import React from "react";
import { NavLink } from "react-router-dom";
import "../estilos/NavBar.css";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="button-container">
        <NavLink to={"/home"} style={{ textDecoration: "none" }}>
          <button className="btn-1" onClick="window.location.reload(true)">Home</button>
        </NavLink>
        <NavLink to={"/home/create"} style={{ textDecoration: "none" }}>
          <button className="btn-2">Create Game</button>
        </NavLink>
        <NavLink to={"/home/about"} style={{ textDecoration: "none" }}>
          <button className="btn-3">About</button>
        </NavLink>
      </div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </nav>
    </React.Fragment>
  );
}
