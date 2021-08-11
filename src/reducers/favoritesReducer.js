import { TOGGLE_FAVORITES, ADD_FAVORITES, DELETE_FAVORITES } from "../actions/movieActions"
import movies from "./../data.js"

const initialState = {
    favorites: movies,
    displayFavorites: false
}
console.log(initialState)

const favoritesReducer = (state = initialState,action)=>{
    switch(action.type){
       case TOGGLE_FAVORITES:
           return{
               ...state,
               displayFavorites: !state.displayFavorites,
           }
           case ADD_FAVORITES:
           return{
               ...state,
               favorites:[...state.favorites,  action.payload]
           }
           case DELETE_FAVORITES:
           return{
               ...state,
               favorites: [...state.favorites, action.payload]
           }
           default:
            return state;
    }
    
}
export default favoritesReducer;