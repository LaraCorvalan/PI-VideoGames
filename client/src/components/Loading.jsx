import React from "react";
import "../estilos/Loading.css";

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="load">
        <span class="loader"></span>
        {/* <h2 className="loading-text"> LOADING ...</h2> */}
      </div>
    </div>
  );
}
