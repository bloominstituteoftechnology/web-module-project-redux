import { ADD_FAVORITE } from "../actions/favoriteActions";
import { DELETE_FAVORITE } from "../actions/favoriteActions";
import { TOGGLE_FAVORITE } from "../actions/favoriteActions";

const initialState = {
    favorites : [],
    displayFavorites : true
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => action.payload !== favorite.id)
            }
        case TOGGLE_FAVORITE:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
};

export default favoriteReducer;