import { ADD_FAVORITE, DELETE_FAVORITE, TOGGLE_FAVORITES } from '../actions/favoritesActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case ADD_FAVORITE:
            console.log(action.payload)
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case TOGGLE_FAVORITES:
            console.log("toggle favorites button in the favoritesReducer");
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default favoritesReducer;