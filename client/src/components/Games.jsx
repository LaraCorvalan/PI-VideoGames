import React from "react";
import Game from "./Game";
import '../estilos/Games.css'

export default function Games({ videogames }) {
  // console.log('soy games >> ', videogames);
  return (
    <div className='games-card' >
      {videogames &&
        videogames.map((g) => {
          //console.log(g)
          return (
            <div key={g.id} >
              <Game
                id={g.id}
                name={g.name}
                rating={g.rating}
                image={g.image}
                genre={g.genre}
              />
            </div>
          );
        })}
    </div>
  );
}
