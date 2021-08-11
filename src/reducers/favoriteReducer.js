import { TOGGLE_FAVORITES, ADD_FAVORITE } from "./../actions/favoriteActions.js";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state, displayFavorites: !state.displayFavorites
            }
        // case ADD_FAVORITE:
        //     return {

        //     }
        default:
            return state;
    }
}

export default reducer;