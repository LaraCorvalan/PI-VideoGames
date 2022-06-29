import React from "react";
import "../estilos/CreateGame.css";
import { createGame } from "../actions";
import { useDispatch } from "react-redux";

export default function CreateGame() {
  let [input, setInput] = React.useState({
    name: "",
    description: "",
    releaseDate: "",
    rating: "",
    genres: [],
    platforms: [],
    image: "",
  });
  
  let handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  var dispatch = useDispatch();

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGame(input));
    setInput({
      name: "",
      description: "",
      releaseDate: "",
      rating: "",
      genres: [],
      platforms: [],
      image: "",
    });
  };

  return (
    <div className="create-container">
      <div className="lets-go">
        <h2 id="h2-1">LET'S</h2>
        <h1 id="h1-1">CREATE</h1>
        <h2 id="h2-2">YOUR OWN</h2>
        <h1 id="h1-2">GAME</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="divs-group">
          <input
            className="input-1"
            type="text"
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Name</label>

          <input
            className="input-2"
            type="text"
            name={"description"}
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
          <label>Description</label>

          <input
            className="input-3"
            type="text"
            name={"releaseDate"}
            value={input.releaseDate}
            onChange={(e) => handleChange(e)}
          />
          <label>Release Date</label>

          <input
            className="input-4"
            type="text"
            name={"rating"}
            value={input.rating}
            onChange={(e) => handleChange(e)}
          />
          <label>Rating</label>

          <input
            className="input-5"
            type="text"
            name={"genres"}
            value={input.genres}
            onChange={(e) => handleChange(e)}
          />
          <label>Genres</label>

          <input
            className="input-6"
            type="text"
            name={"platforms"}
            value={input.platforms}
            onChange={(e) => handleChange(e)}
          />
          <label>Platform</label>

          <input
            className="input-7"
            type="text"
            name={"image"}
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
          <label>Image</label>

          <input className="input-btn" type="submit" value="CREATE GAME!" />
        </div>
      </form>
    </div>
  );
}
