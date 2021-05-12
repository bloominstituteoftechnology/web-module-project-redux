import { TOGGLE_FAVORITE } from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavorites: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            }
        default:
            return state;
    }
}

export default reducer;