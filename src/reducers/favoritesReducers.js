import { ADD_FAVORITE } from '../actions/favoritesActions.js';
import movies from './../data.js';

const initialState = {
 favorites : [],
 displayFavorites : true
}

const favoritesReducer = (state = initialState, action) => {
switch (action.type){
    case ADD_FAVORITE:
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        }
    default:
        return state
}

}

export default favoritesReducer;