import { TOGGLE_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [ ...state.favorites, action.payload]
            }

        case DELETE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => (action.payload !== favorite.id))
            }
        
        default:
            return state;
    }
}

export default reducer;