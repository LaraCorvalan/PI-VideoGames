import React from "react";
import { useState } from "react";
import { getGamebyName } from "../actions";
import { useDispatch } from "react-redux";
import '../estilos/SearchBar.css'

export default function SearchBar() {
  const [input, setInput] = useState({
    name: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.length) {
      alert("Please, enter a game.");
    } else {
      dispatch(getGamebyName(input));
      setInput({
        name: "",
      });
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className='search-container'>
        <input
          className="input-text"
          type="text"
          placeholder= '   Looking for a game?'
          name={"name"}
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <button className="submit" type="submit" value="Search">Search</button>
      </form>
    </div>
  );
}
