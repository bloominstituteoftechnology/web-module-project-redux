import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

export const initialState = {
    movies: movies,
    appTitle: "IMDB Murvee Database"
}

const movieReducer = (state = initialState, action) => {

    console.groupCollapsed("%cmovieReducer.js", "color: yellow")
    console.log('%cstate:', 'color: orange')
    console.table(state)
    console.log('%caction: ', 'color: orange')
    console.table(action)
    console.groupEnd("movieReducer.js")

    switch (action.type) {
        case DELETE_MOVIE:
            console.log(action)
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload)
            }
        case ADD_MOVIE:
            const newMovie = { ...action.payload, id: Date.now() }
            return {
                ...state,
                movies: [...state.movies, newMovie]
            }
        default:
            return state;
    }
}

export default movieReducer;
