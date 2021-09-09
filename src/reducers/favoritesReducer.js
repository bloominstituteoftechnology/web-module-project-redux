import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoitesAction";
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favReducer = (state = initialState, action) => {
    // console.log('favoritesReducer ln:7 STATE', state);
    // console.log('favoritesReducer ln:8 ACTION', action);
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => {
                    return item.id !== action.payload
                })
            }

        default:
            return state;

    }
}
export default favReducer;