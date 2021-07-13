import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';


const initialState = {
    movies: movies,
    appTitle: "Chelsea's Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_MOVIE:
                const newMovie = {
                    ...action.payload,
                    id: Date.now()
                }
                return {
                    ...state,
                    movies: [...state.movies, newMovie]
                }
        default:
            return state;
    }
}


export default reducer;

// * [ ] Add in an ADD_MOVIE case to movieReducer.js.
// * [ ] Make this new case return a version of state with new movie values passed in through the payload.