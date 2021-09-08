import { TOGGLE_FAVORITES, ADD_FAVORITE } from "../actions/favoitesAction";
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favReducer = (state = initialState, action) =>{
    console.log('favoritesReducer ln:7 state', state);
    console.log('favoritesReducer ln:8 state', action);
    switch(action.type){
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
            
        default: 
        return state;

    }
}
export default favReducer;