import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {

    console.groupCollapsed('%cmovieReducer.js', 'color: pink')
    console.log('%cState: ', 'color: yellow')
    console.table(state)
    console.log('%cAction: ', 'color: yellow')
    console.table(action)
    console.groupEnd('movieReducer.js')

    switch (action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;
