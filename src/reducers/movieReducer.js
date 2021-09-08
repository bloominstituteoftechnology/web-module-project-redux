import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    // console.log('movieReducer.js ln:10 action:', action);
    // console.log('movieReducer.js ln:11 state:', state);
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            return{
                ...state, 
                movies: [...state.movies, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;
