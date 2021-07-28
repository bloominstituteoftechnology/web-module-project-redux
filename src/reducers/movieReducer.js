import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js'; // bringing movies from data

const initialState = {
    movies: movies,
    appTitle: "The Movie Project for Lambda"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:
            const newMovie = {
                ...action.payload,
                id: Date.now()
            }
            return {
                ...state,
                movies: [...movies, newMovie]
            }
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;