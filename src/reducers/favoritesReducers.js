import { ADD_FAVORITES, REMOVE_FAVORITES, TOGGLE_FAVORITES } from "../actions/movieActions"


const initialState = {
    favorites: [],
    displayFavorites: true
}
const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            const newFav = {
                ...action.payload
            }
            return {
                ...state,
                favorites: [...state.favorites, newFav]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }

        default:
            return state
    }
}

export default favoritesReducer