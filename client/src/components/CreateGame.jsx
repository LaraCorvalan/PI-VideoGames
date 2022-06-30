import React from "react";
import "../estilos/CreateGame.css";
import { createGame, getGenres, getGames } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function CreateGame() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const videogames = useSelector((state) => state.videogames);
  
  let platforma = videogames.map((e) => e.platform);
  platforma = platforma.flat().sort();
  const dataArr = new Set(platforma);
  platforma = [...dataArr];

  console.log("soy platforma", platforma);

  let [input, setInput] = useState({
    name: "",
    description: "",
    releaseDate: "",
    rating: "",
    genres: [],
    platform: [],
    image: "",
  });

  let handleChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGame({
      name: input.name,
      description: input.description,
      releaseDate: input.releaseDate,
      rating: input.rating,
      genres: input.genres,
      platform: input.platform,
      image: input.image,
    }));
    console.log('soy input',input)
    setInput({
      name: "",
      description: "",
      releaseDate: "",
      rating: "",
      genres: [],
      platform: [],
      image: "",
    });
  };

  let handleSelectG = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };

  let handleSelectP = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      platform: [...input.platform, e.target.value],
    });
  };


  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

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
            type="textarea"
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

          <select className="input-5" name={'genres'} value={input.genres} onChange={(e) => handleSelectG(e)} >
            <option name="genres">Choose an option</option>
            {genres &&
              genres.map((g) => (
                <option key={g.id} >
                  {g.name}
                </option>
              ))}
          </select>
          <label>Genres</label>

          <select className="input-6" name={'platform'} value={input.platform} onChange={(e) => handleSelectP(e)} >
            <option name="platform">Choose an option</option>
            {platforma &&
              platforma.map((p) => (
                <option key={p} >
                  {p}
                </option>
              ))}
          </select>
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
