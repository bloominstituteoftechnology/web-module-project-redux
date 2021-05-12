import { TOGGLE_FAVORITE, ADD_FAVORITE } from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavorites: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;