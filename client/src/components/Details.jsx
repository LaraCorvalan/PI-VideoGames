import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import "../estilos/Details.css";

export default function Details({ id }) {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detail);

  React.useEffect(() => dispatch(getDetail(id)), []);

  return (
    <div className="detail-container">
      <div className="detail">
        <h3 className="detail-title">{detalle.name}</h3>
        <img src={detalle.image} alt="Image not found" height="200px" />
        <h3>Description: {detalle.description}</h3>
        <h3>Released Date: {detalle.released}</h3>
        <h3>Rating: {detalle.rating}</h3>
        <h3>Available Platforms: {detalle.platforms}</h3>
        <h3>Genres: {detalle.genres}</h3>
      </div>
    </div>
  );
}
