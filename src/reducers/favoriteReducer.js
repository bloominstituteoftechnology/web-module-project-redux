import {TOGGLE_FAVORITES} from '../actions/movieActions'
import {ADD_FAVORITES} from '../actions/movieActions'
import {REMOVE_FAVORITES} from '../actions/movieActions'

const initialState={
    favorites:[],
    displayFavorites:true
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case TOGGLE_FAVORITES:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            
            }
            case ADD_FAVORITES:
                return{
                    ...state,
                    favorites: [...state.favorites, action.payload]
                }
                case REMOVE_FAVORITES:
                    return{
                        favorites: state.favorites.filter(item=>(action.payload !== item.id))
                    }
        default:
            return state;
    }
}
export default reducer