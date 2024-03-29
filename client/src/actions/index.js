import axios from "axios";

export function createGame(objeto){
    return async function (dispatch){
        let post = await axios.post('http://localhost:3001/videogames', objeto)
        //console.log('soy post.data',post.data)
        return dispatch({
          type: 'CREATE_GAME',
          payload: post.data,
        })
    }
}
// trae todos los juegos
export function getGames() {
  return async function (dispatch) {
    let games = await axios.get("http://localhost:3001/videogames");
    let resultGames = games.data;
    //console.log('yo tengo info - actions >>',resultGames);
    return dispatch({
      type: "GET_GAMES",
      payload: resultGames,
    });
  };
}
//trae el juego que matchee el id pasado por params
export function getDetail(id){
  return async function (dispatch) {
    try {
      let gamesId = await axios.get(`http://localhost:3001/videogame/${id}`);
      let resultGamesId = gamesId.data;
      //console.log('yo tengo info ->>', gamesId)
      return dispatch({
        type: "GET_DETAIL",
        payload: resultGamesId
      })
    } catch (error) {
      alert("Game not found");
    }
    
  };
}
//trae juegos por nombre o devuelve error
export function getGamebyName(name) {
  return async function (dispatch) {
    try {
      let queryName = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      //console.log(queryName);
      return dispatch({
        type: "GET_GAME_BYNAME",
        payload: queryName.data,
      });
    } catch (error) {
      alert("Couldn't find the game");
    }
  };
}

export function getGenres() {
  return async function(dispatch) {
      let genres = await axios.get("http://localhost:3001/genres");
      let resultGenres = genres.data;
      //console.log(resultGenres);
      return dispatch({
        type: "GET_GENRES",
        payload: resultGenres,
      });
    }
};

export function orderGames(data){
  return {
    type: 'ORDER_GAMES',
    payload: data
  }
}

export function filterGames(info){
  return {
    type: 'FILTER_GAMES',
    payload: info
  }
}

export function filterGenre(info){
  return {
    type: 'FILTER_GENRE',
    payload: info
  }
}

export function borrarOrder(){
  return {
    type: 'BORRAR'
  }
}

// export function orderByRating(data){
//   return {
//     type: 'ORDER_BY_AZ',
//     payload: data
//   }
// }


// export function loading(payload){
//   return {
//     type: "LOADING",
//     payload: payload,
//   }
// }
