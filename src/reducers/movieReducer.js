import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

import { connect } from 'react-redux';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                const ADD_MOVIE: "ADD_MOVIE" ad!==item.id
            }; import ADD_MOVIE
            case ADD_MOVIE:
                    return{
                        ...state,
                        movies [...state.movies, actionpayload]
                    };
        default:
            return state;
    }
};

export default reducer;