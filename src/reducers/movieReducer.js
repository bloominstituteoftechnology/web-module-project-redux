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
            return {
                ...movies,
                movies: [...state.movies, {
                        id: movies.length + 1,
                        title: "",
                        director: "",
                        metascore: "",
                        genre: "",
                        description: ""  
                }]
            }   
        default:
            return state;
    }
}

export default reducer;