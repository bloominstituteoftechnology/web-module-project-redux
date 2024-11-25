import movies from "../data";

export const initialFavoriteState = {
    favorites: movies,
    displayFavorites: false,
} 

const favoriteReducer = (state, action) => {
    switch(action.type) {
        case (FAVORITE_MOVIE):
            return({
                ...state,
                displayFavorites: !state.displayFavorites
            })
    }
}

export default favoriteReducer;