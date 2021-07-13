import {FAVORITE_MOVIE} from '../actions/movieActions';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        // case FAVORITE_MOVIE:
        //     return {
        //         ...state,
        //         movies: state.movies.filter(item=>(action.payload !== item.id))
        //     }
        default:
            return(state);
    }
}


export default favoritesReducer;