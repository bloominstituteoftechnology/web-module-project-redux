import movies from "../data";
import { TOGGLE_FAV, ADD_FAV } from "../actions/favoriteActions";
import { boolean } from "yargs";


const initialState ={
    favorites: [movies],
    displayFavorites: "false"
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_FAV:
            return{
                displayFavorites: !boolean
            }
        case ADD_FAV:
            return{
                ...state,
                favorites:
            }
        default:
            return state;
    }
}


export default reducer;