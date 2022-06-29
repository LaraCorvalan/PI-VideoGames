const initialState = {
    videogames: [],
    detail: [],
    filteredGames: [],
    genres: [],
    // loading: true,
    
};

export default function RootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                videogames: action.payload,
                filteredGames: action.payload
            };
        case "CREATE_GAME":
            return {
                ...state,
                // games --> [{}, {}, {}, {}]
                games: [...state.games, action.payload],
            };
        case 'GET_GAME_BYNAME':
            return {
                ...state,
                videogames: action.payload,
            }
        case 'GET_DETAIL': 
            return {
                ...state,
                detail: action.payload,
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        // case 'LOADING':
        //     return {
        //         ...state,
        //         loading: action.payload
        //     }
    default: return {...state}
    }
}