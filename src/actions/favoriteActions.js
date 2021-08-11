export const TOGGLE_FAV = "TOGGLE_FAV";
export const ADD_FAV = "ADD_FAV";
export const REMOVED_FAV = "REMOVED_FAV"

export const toggleFavorites=(boolean)=>{
    return({type: TOGGLE_FAV, payload: boolean})
}
export const addFavorites=(movie)=>{
    return({type: ADD_FAV, payload:movie })
}
export const removeFavorite=(id)=>{
    return({type: REMOVED_FAV, payload:id})
}
