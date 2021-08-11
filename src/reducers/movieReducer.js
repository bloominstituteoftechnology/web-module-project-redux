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
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...movies, {
                    id: state.movies.reduce((acc, cur) => cur.id > acc ? cur.id : acc, 0) + 1,
                    ...action.payload,
                }],
            }
        default:
            return state;
    }
}

export default reducer;