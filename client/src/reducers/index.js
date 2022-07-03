const initialState = {
  videogames: [],
  gamesDB: {},
  detail: [],
  ordenados: [],
  genres: [],
  filtrados: [],

  // loading: true,
};

export default function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_GAMES":
      return {
        ...state,
        videogames: action.payload,
        filtrados: action.payload,
      };
    case "CREATE_GAME":
      return {
        ...state,
        // games --> [{}, {}, {}, {}]
        videogames: [...state.videogames, action.payload],
      };
    case "GET_GAME_BYNAME":
      return {
        ...state,
        videogames: action.payload,
      };
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: action.payload,
      };
    // case 'ORDER_BY_AZ':
    //     let order =  action.payload === 'none' ? state.videogames :
    //     action.payload === 'desc' ? state.videogames.sort((a, b) => {
    //         if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
    //         else if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
    //         else return 0
    //     }) : state.videogames.sort((a, b) => {
    //         if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
    //         else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    //         else return 0;
    //     })
    //     return {
    //         ...state,
    //        videogames: order
    //     }
    case "ORDER_GAMES":
      // let orderRating = action.payload === 'lower' ? state.videogames.sort((a, b) => {
      //     if(Number(a.rating) > Number(b.rating)) return 1
      //     else if(Number(a.rating) < Number(b.rating)) return -1
      //     else return 0
      // }) : state.videogames.sort((a, b) => {
      //     if(Number(a.rating) < Number(b.rating)) return 1
      //     else if (Number(a.rating) > Number(b.rating)) return -1
      //     else return 0;
      // })
      // 2DA PRUEBA
      // let orderRating = state.videogames.sort((a, b)=> {
      //     if(a.rating < b.rating){
      //         return action.payload === 'lower' ? -1 : 1
      //     }
      //     if(a.rating > b.rating){
      //         return action.payload === 'higher'? -1 : 1
      //     }
      //     return 0
      // })
      //3RA PRUEBA
      let order = "";
      switch (action.payload) {
        case "asc":
          order =
            state.ordenados.length > 0
              ? state.ordenados.sort((a, b) => {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                  else if (a.name.toLowerCase() > b.name.toLowerCase())
                    return 1;
                  else return 0;
                })
              : state.videogames.sort((a, b) => {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                  else if (a.name.toLowerCase() > b.name.toLowerCase())
                    return 1;
                  else return 0;
                });
          break;
        case "desc":
          order =
            state.ordenados.length > 0
              ? state.ordenados.sort((a, b) => {
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                  else if (a.name.toLowerCase() < b.name.toLowerCase())
                    return 1;
                  else return 0;
                })
              : state.videogames.sort((a, b) => {
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                  else if (a.name.toLowerCase() < b.name.toLowerCase())
                    return 1;
                  else return 0;
                });
          break;
        case "higher":
          order =
            state.ordenados.length > 0
              ? state.ordenados.sort((a, b) => {
                  if (Number(a.rating) < Number(b.rating)) return 1;
                  else if (Number(a.rating) > Number(b.rating)) return -1;
                  else return 0;
                })
              : state.videogames.sort((a, b) => {
                  if (Number(a.rating) < Number(b.rating)) return 1;
                  else if (Number(a.rating) > Number(b.rating)) return -1;
                  else return 0;
                });
          break;
        case "lower":
          order =
            state.ordenados.length > 0
              ? state.ordenados.sort((a, b) => {
                  if (Number(a.rating) > Number(b.rating)) return 1;
                  else if (Number(a.rating) < Number(b.rating)) return -1;
                  else return 0;
                })
              : state.videogames.sort((a, b) => {
                  if (Number(a.rating) > Number(b.rating)) return 1;
                  else if (Number(a.rating) < Number(b.rating)) return -1;
                  else return 0;
                });
          break;
        default:
          order = state.videogames;
      }
      return {
        ...state,
        videogames: order,
      };

    case "FILTER_GAMES":
      return {
        ...state,
        ordenados: action.payload,
      };

    case 'FILTER_GENRE':
      let filterGenreAPI = ''
      // let filterGenreDB = ''
      console.log(action.payload)
      filterGenreAPI = action.payload === 'all' ? state.filtrados : 
      state.filtrados.filter(e => e.genre?.includes(action.payload))

      let filterGenreDB = state.filtrados.filter(e => {
        for (let i = 0; i < e.genres?.length; i++) {
          if(e.genres[i].name.includes(action.payload)) {
            return true
          }}
          return false
      })

      let filterGenre = filterGenreAPI.concat(filterGenreDB)
     
      return {
        ...state, 
        videogames: filterGenre
      }
    case "BORRAR":
      return {
        ...state,
        ordenados: [],
      };

    default:
      return { ...state };
  }
}

