import { ADD_FAVORITE, TOGGLE_DISPLAY_FAVORITES, REMOVE_FAVORITE } from "../actions/favoriteActions";

const initialState = {
    favorites: [],
    displayFavorites: false,
};

const favoriteMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        
        case TOGGLE_DISPLAY_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            }

        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id)
            }

        default:
            return state;
    }
}

export default favoriteMoviesReducer;