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
                <img src={props.image? props.image : 'https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' } alt='No image found' width='250px' height='150px' />
            </div>
            <div className="card-genre">
                <h4>{props.genre ? props.genre?.join(' - ') : props.genres}</h4>
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
