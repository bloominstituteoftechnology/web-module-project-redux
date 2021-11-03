import { ADD_FAVORITE, DELETE_FAVORITE, TOGGLE_FAVORITE } from '../actions/movieActions.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        case ADD_FAVORITE:
            return{
                ...state, 
                favorites: [...state.favorites, action.payload]
            }
        case TOGGLE_FAVORITE:
            return{
                ...state, 
                displayFavorites: !state.displayFavorites
            }
        default:
            return state;
    }
}

export default reducer;