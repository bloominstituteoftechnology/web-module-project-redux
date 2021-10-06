import { TOGGLE_FAVORITES } from './../actions/favoritesActions';
import { ADD_FAVORITE } from './../actions/favoritesActions';
import { REMOVE_FAVORITE } from './../actions/favoritesActions';
const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action)=> {
    switch(action.type){
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
    
    case ADD_FAVORITE:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
            }
    case REMOVE_FAVORITE:
        console.log(action.payload)
        return{
            ...state,
            
            favorites: state.favorites.filter(favorite=>(action.payload !== favorite.id))
        }
        
        default: return state
    }
        
}

export default favoritesReducer; 