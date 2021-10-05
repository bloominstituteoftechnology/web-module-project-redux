import {TOGGLE, ADD_FAVORITE} from '../actions/favoritesAction'


export const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE:
            
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            return{
                ...state,
                favorites: [...state.favorites, {
                    id: (action.payload).length,
                    title: action.payload.title,
                    director: action.payload.director,
                    metascore: action.payload.metascore,
                    genre: action.payload.genre,
                    description: action.payload.description
                    }]
            }

        default:
            return state;
    }
}

export default favoritesReducer;