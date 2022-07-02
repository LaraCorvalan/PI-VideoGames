const initialState = {
    videogames: [],
    gamesDB: {},
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
                videogames: [...state.videogames, action.payload],
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
            case 'ORDER_GAMES':
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
                let order = ''
                switch(action.payload){
                    case 'asc': order = state.videogames.sort((a, b) => {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                        else if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                        else return 0;
                    })
                    break;
                    case 'desc': order = state.videogames.sort((a, b) => {
                        console.log(action.payload) 
                        console.log(order) 
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        else if(a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        else return 0
                    }) 
                    break;
                    case 'higher' : order = state.videogames.sort((a, b) => {
                        if(Number(a.rating) < Number(b.rating)) return 1
                        else if (Number(a.rating) > Number(b.rating)) return -1
                        else return 0;
                    })
                    break;
                    case 'lower' : order = state.videogames.sort((a, b) => {
                        if(Number(a.rating) > Number(b.rating)) return 1
                        else if(Number(a.rating) < Number(b.rating)) return -1
                        else return 0
                    })
                    break;
                    default: order = state.videogames
                } 
                return {
                    ...state, 
                   videogames: order
                }
                
            case 'FILTER_GAMES':
                let filter = ''
                switch(action.payload){
                    case "api": filter = state.videogames.filter((e) => typeof(e.id) === 'number')
                    console.log(action.payload)
                    console.log('soy filter api',filter)
                    break;
                    case 'db': filter = state.videogames.filter((e) => typeof(e.id) !== 'number')
                    console.log(action.payload)
                    console.log('soy filter db',filter)
                    break;
                    case 'allapi-db': filter = state.videogames
                    console.log(action.payload)
                    console.log('soy filter allapidb', filter)
                    break;
                    default: filter = state.videogames
                }
                return {
                    ...state, 
                    videogames: filter
                }

    default: return {...state}
    }
}