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
                id: Number(+5),
                title: state.title,
                director: state.director,
                genre: state.genre,
                metascore: state.metascore,
                description: state.description
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