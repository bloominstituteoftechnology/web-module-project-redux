import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const newMovie = {
                title: action.payload,
                director: action.payload,
                genre: action.payload,
                metascore: action.payload,
                description: action.payload
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