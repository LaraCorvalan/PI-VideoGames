import React from "react";
import "../estilos/CreateGame.css";
import { createGame, getGenres, getGames } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function validate(input) {
  let errores = {};
  let validateFecha =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

  if (!input.name) {
    errores.name = "Name is required!";
  } else if (!input.description || input.description.length < 20) {
    errores.description = "Description must have at least 20 characters";
  } else if (!validateFecha.test(input.releaseDate)) {
    errores.releaseDate = "Release date must be dd/mm/yyyy";
  } else if (
    !input.rating ||
    !Number(input.rating) ||
    input.rating < 0 ||
    input.rating > 5 ||
    input.rating === ""
  ) {
    errores.rating = "Rating must be between 0 and 5";
  } else if (!input.genre) {
    errores.genre = "You have to choose at least one option";
  } else if (!input.platform) {
    errores.platform = "You have to choose at least one option";
  }
  return errores;
}

export default function CreateGame() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  const videogames = useSelector((state) => state.videogames);
  const [error, setError] = useState({});

  //console.log("soy error", error);

  let platforma = videogames.map((e) => e.platform);
  platforma = platforma.flat().sort();
  const dataArr = new Set(platforma);
  platforma = [...dataArr];

  let [input, setInput] = useState({
    name: "",
    description: "",
    releaseDate: "",
    rating: "",
    genre: [],
    platform: [],
  });

  let handleChange = (e) => {
    e.preventDefault();
    setInput((input) => {
      const newInput = {
        ...input,
        [e.target.name]: e.target.value,
      };
      const ERROR = validate(newInput);
      setError(ERROR);

      return newInput;
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(error).length === 0) {
      dispatch(
        createGame({
          name: input.name,
          description: input.description,
          releaseDate: input.releaseDate,
          rating: input.rating,
          genre: input.genre,
          platform: input.platform.toString(),
        })
      );
      console.log("soy input", input);
      alert("Game created successfully");
      setInput({
        name: "",
        description: "",
        releaseDate: "",
        rating: "",
        genre: [],
        platform: [],
        //image: "",
      });
      // setTimeout(() => {
      //   history('/home')
      // }, 2000)
    } else {
      alert("Game was not created. Fill in all the blanks!");
      return;
    }
  };

  let handleSelectG = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      genre: [...input.genre, e.target.value],
    });
  };

  let handleSelectP = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      platform: [...input.platform, e.target.value],
    });
  };

  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      genre: input.genre.filter((gen) => gen !== e.target.value),
      platform: input.platform.filter((pt) => pt !== e.target.value),
    });
  }

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
      <form onSubmit={(e) => handleSubmit(e)} className="form-container">
        <div className="divs-group">
          <div className="form-1">
            <label>Name</label>
            <input
              className="input-1"
              type="text"
              name={"name"}
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            {error.name && (
              <p>
                {" "}
                <small>{error.name}</small>
              </p>
            )}
          </div>
          <div className="form-2">
            <label>Description</label>
            <input
              className="input-2"
              type="textarea"
              name={"description"}
              value={input.description}
              onChange={(e) => handleChange(e)}
            />
            {error.description && (
              <p>
                <small>{error.description}</small>
              </p>
            )}
          </div>

          <div className="form-3">
            <label>Release Date</label>
            <input
              className="input-3"
              type="text"
              name={"releaseDate"}
              value={input.releaseDate}
              onChange={(e) => handleChange(e)}
            />
            {error.releaseDate && (
              <p>
                <small>{error.releaseDate}</small>
              </p>
            )}
          </div>

          <div className="form-4">
            <label>Rating</label>
            <input
              className="input-4"
              type="text"
              name={"rating"}
              value={input.rating}
              onChange={(e) => handleChange(e)}
            />
            {error.rating && (
              <p>
                <small>{error.rating}</small>
              </p>
            )}
          </div>

          <div className="form-5">
            <label>Genres</label>
            <select
              className="input-5"
              name={"genre"}
              value={input.genre}
              onChange={(e) => handleSelectG(e)}
            >
              <option name="genre">Choose an option</option>
              {genres &&
                genres.map((g) => <option key={g.id}>{g.name}</option>)}
            </select>
            {error.genre && (
              <p>
                <small>{error.genre}</small>
              </p>
            )}
          </div>
          {/* GENRES SELECTED */}
          <div className="selected-1">
            <p className="genres-selected">SELECTED GENRES:</p>
            {/* BOTON PARA HACER CLICK Y BORRAR LA OPCION ELEGIDA: */}
            <div className="buttons">
              {input.genre.map((gen) => (
                <div>
                  <button onClick={handleDelete} value={gen}>
                    {gen}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-6">
            <label>Platform</label>
            <select
              className="input-6"
              name={"platform"}
              value={input.platform}
              onChange={(e) => handleSelectP(e)}
            >
              <option name="platform">Choose an option</option>
              {platforma && platforma.map((p) => <option key={p}>{p}</option>)}
            </select>
            {error.platform && (
              <p>
                <small>{error.platform}</small>
              </p>
            )}
          </div>

          <div className='selected-2'>
            <p className="platform-selected">SELECTED PLATFORMS:</p>
            {/* BOTON PARA HACER CLICK Y BORRAR LA OPCION ELEGIDA: */}
            <div className="buttons">
              {input.platform.map((p) => (
                <div>
                  <button
                    onClick={handleDelete}
                    className="btn-create"
                    value={p}
                  >
                    {p}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <input className="input-btn" type="submit" value="CREATE GAME!" />
        </div>
      </form>
    </div>
  );
}
