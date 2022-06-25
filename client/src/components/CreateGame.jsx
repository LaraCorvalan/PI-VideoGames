import React from "react";
import "../estilos/CreateGame.css";

export default function CreateGame() {
  let [input, setInput] = React.useState({
    name: "",
    description: "",
    releaseDate: "",
    rating: "",
    platform: "",
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
    setInput({
      name: "",
      description: "",
      releaseDate: "",
      rating: "",
      platform: "",
    });
  };

  return (
    <div className="create-container">
      <div className="lets-go">
        <h2 id = 'h2-1'>LET'S</h2>
        <h1 id = 'h1-1'>CREATE</h1>
        <h2 id = 'h2-2'>YOUR OWN</h2>
        <h1 id = 'h1-2'>GAME</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="divs-group">
          <input
            type="text"
            name={"name"}
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Name</label>

          <input
            type="text"
            name={"description"}
            value={input.description}
            onChange={(e) => handleChange(e)}
          />
          <label>Description</label>

          <input
            type="text"
            name={"releaseDate"}
            value={input.releaseDate}
            onChange={(e) => handleChange(e)}
          />
          <label>Release Date</label>

          <input
            type="text"
            name={"rating"}
            value={input.rating}
            onChange={(e) => handleChange(e)}
          />
          <label>Rating</label>

          <input
            type="text"
            name={"platform"}
            value={input.platform}
            onChange={(e) => handleChange(e)}
          />
          <label>Platform</label>

          <input type="submit" value="GO!" />
        </div>
      </form>
    </div>
  );
}
