
const initialState = 
{
    favorites: [],
    displayFavorites: false,
}

//Set state to initial state
export const favoritesReducer = (state = initialState, action) => 
{
    switch(action.type) 
    {
        case "TOGGLE_FAVORITES":
            return ({
                ...state,
               displayFavorites: !state.displayFavorites
            })

        case "ADD_FAVORITES":
            return ({   
                ...state,
                favorites: [...state.favorites, action.payload]
            })

        case "DELETE_FAVORITES":
            return ({   
                ...state,
                favorites: state.favorites.filter(movie => (movie.id !== action.payload))
            })

        default: return state;
    }
}



export default favoritesReducer;