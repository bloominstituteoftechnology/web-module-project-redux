export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE"

export const toggleFavorites = () => {
    return({type: TOGGLE_FAVORITES})
}

export const addFavorite = () => {
    return({type: ADD_FAVORITE})
}