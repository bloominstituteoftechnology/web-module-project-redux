export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_MOVIE";

export const toggleFavorites = () => {
    return ({type: TOGGLE_FAVORITES})
}

export const addFavorite = movie => {
    return({type: ADD_FAVORITE, payload: movie})
}

export const removeFavorite = id => {
    return({type: REMOVE_FAVORITE, payload: id})
} 