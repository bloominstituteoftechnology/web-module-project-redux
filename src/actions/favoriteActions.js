export const DISPLAY_FAVORITES = 'DISPLAY_FAVORITES'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export const displayFavorites = () =>{
    return({type:DISPLAY_FAVORITES})
}
export const addFavorite = (obj) =>{
    return({type:ADD_FAVORITE, payload:obj})
}
export const deleteFavorite = (id) =>{
    return({type:DELETE_FAVORITE, payload:id})
}
