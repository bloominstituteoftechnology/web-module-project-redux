import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES} from "../actions/favoriteActions.js"


const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites  
            }
        case ADD_FAVORITES:
            console.log(action.payload)
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default reducer;