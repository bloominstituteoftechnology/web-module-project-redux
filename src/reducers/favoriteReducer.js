import { ADD_FAVORITE, DELETE_FAVORITE, TOGGLE_FAVORITE } from "../actions/favoriteActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITE:
            return ({
                ...state,
                favorites: [
                    ...state.favorites,
                    action.payload
                ]
            })
        case DELETE_FAVORITE:
            return ({
                ...state,
                favorites: state.favorites.filter(obj => {
                    return obj.id !== action.payload
                })
            })
        case TOGGLE_FAVORITE:
            return ({
                ...state,
                displayFavorites: !state.displayFavorites
            })
        default:
            return state;
    }
}

export default reducer