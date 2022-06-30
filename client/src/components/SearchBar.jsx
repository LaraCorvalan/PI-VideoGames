import React from "react";
import { useState } from "react";
import { getGamebyName } from "../actions";
import { useDispatch } from "react-redux";

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
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="input-text"
          type="text"
          placeholder= 'Looking for a game?'
          name={"name"}
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
        <input className="submit" type="submit" value="Search" />
      </form>
    </div>
  );
}
