export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const addFavorite = (movie) => {
    return {type: ADD_FAVORITE, payload: movie}
}

export const deleteFavorite = (id) => {
    return {type: DELETE_FAVORITE, payload: id}
}

export const toggleFavorites = (movie) => {
    return {type: TOGGLE_FAVORITE}
}