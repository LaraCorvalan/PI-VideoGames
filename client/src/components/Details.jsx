import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import "../estilos/Details.css";
import { useState } from "react";

export default function Details({ id }) {
  const dispatch = useDispatch();
  const detalle = useSelector((state) => state.detail);
  const [generos, setGeneros] = useState(null);

  React.useEffect(() => dispatch(getDetail(id)), []);
  console.log(detalle.genres);
  React.useEffect(() => {
    if (detalle.genres) {
      if (Array.isArray(detalle.genres)) {
        setGeneros(detalle.genres.map((e) => e.name).toString());
      } else {
        setGeneros(detalle.genres);
      }
    } 
  }, [detalle]);

  

  return (
    <div className="detail-container">
      <div className="detail">
        <h3 className="detail-title">{detalle.name}</h3>
        <img src={detalle.image? detalle.image : 'https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="Image not found" height="200px" />
        <h3>Description: {detalle.description}</h3>
        <h3>Released Date: {detalle.releaseDate}</h3>
        <h3>Rating: {detalle.rating}</h3>
        <h3>Available Platforms: {detalle.platform}</h3>
        <h3>Genres: {generos}</h3>
      </div>
    </div>
  );
}
