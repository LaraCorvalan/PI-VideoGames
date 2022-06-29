import React from "react";
import "../estilos/Game.css";
import { NavLink } from "react-router-dom";

export default function Game(props) {
  return (
    <div className="card-container">
      <div className="body">
        <NavLink to={`/home/details/${props.id}`}  style={{textDecoration:"none"}}>
          <h2 className="card-name">{props.name}</h2>
        </NavLink>
        <div>
            <div className="card-img">
                <img src={props.image} alt='not found' width='250px' height='150px' />
            </div>
            <div className="card-genre">
                <h4>{props.genre}</h4>
            </div>
            <div className="card-rating">
                <h4>{props.rating}</h4>
                <img src="https://api.iconify.design/ic:twotone-star.svg" alt="icon" />
            </div>
        </div>
      </div>
    </div>
  );
}
