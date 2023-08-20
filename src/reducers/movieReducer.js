import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => (action.payload !== item.id))
            }
        case ADD_MOVIE:
            return {
                movies: [...state.movies, 
                    {
                        ...action.payload,
                        id: state.movies.length
                    }
                ]
            }
        default:
            return state;
    }
}

export default movieReducer;