import { ADD_TO_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload.id
                ]
            }
        default:
            return state;
    }
}

export default favoritesReducer;