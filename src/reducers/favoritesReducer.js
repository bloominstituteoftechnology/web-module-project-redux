import { DELETE_FAVORITES, ADD_FAVORITES, TOGGLE_FAVORITES } from '../actions/movieActions';

const initialState = {
    favorites: [],
    displayFavorites: false
}

export const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_FAVORITES':
            return ({   
                ...state,
                favorites: state.favorites.filter(movie => (movie.id !== action.payload))
            })
        case "ADD_FAVORITES":
            return ({   
                ...state,
                favorites: [...state.favorites, action.payload]
            })
        case "TOGGLE_FAVORITES":
            return ({
                ...state,
                displayFavorites: action.payload,
                displayFavorites: !state.displayFavorites
            })
        default:
            return state
    }   
}

export default favoritesReducer;