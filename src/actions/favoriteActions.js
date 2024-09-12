export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const toggleFav = () => {
    return({ type:TOGGLE_FAVORITES})
}

export const addFav = (title) => {
    return({type:ADD_FAVORITES, payload:title})
}

export const removeFav = (id) => {
    return ({type:REMOVE_FAVORITES, payload:id})
}