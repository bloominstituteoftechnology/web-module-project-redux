import movies from "../data";
import { TOGGLE_FAV, ADD_FAV, REMOVED_FAV } from "../actions/favoriteActions";
import { boolean } from "yargs";


const initialState ={
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAV:
            return{
                ...state,
                displayFavorites: action.payload
            }
        case ADD_FAV:
            return{
                ...state,
                favorites:[ ...state.favorites, action.payload]
            }
        case REMOVED_FAV:
            return{
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id)
            }
        default:
            return state;
    }
}


export default reducer;