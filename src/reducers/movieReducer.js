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
            default:
                return state;
        case ADD_MOVIE: 
        console.log(action.payload)
        console.log(state.movies)
            return {
                ...state,
                movies: [...state.movies, action.payload ]

            };
            
        
    }
}

export default reducer;