export const TOGGLE_FAVORITES = "TOGGLE FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const toggleFavorites = (id) =>{
    return({type: TOGGLE_FAVORITES, payload: id
    })
}
export const addFavorite = (movie) => {
    return ({type: ADD_FAVORITE, payload:movie})
}
export const removeFavorite = (movie) => {
    return ({type: REMOVE_FAVORITE, payload:movie})
}
