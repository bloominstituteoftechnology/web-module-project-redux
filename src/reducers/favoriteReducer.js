import {ADD_FAVORITES, REMOVE_FAVORITES, TOGGLE_FAVORITES} from '../actions/favoriteActions'

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAVORITES:
            const newFavorite = {
                ...action.payload,
                // id: Date.now()
            }
            return {
                ...state,
                favorites: [...state.favorites, newFavorite]
            }
        case REMOVE_FAVORITES:
            return {
                favorites: state.favorites.filter(fave => action.payload !== fave.id)
            }
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state
    }
}

export default reducer