export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITE";
export const REMOVE_FAVORITES = "REMOVE_FAVORITE";

export const toggleFavorites = ()=> {
    return({type: TOGGLE_FAVORITES});
}

export const addFavorites = (movie)=> {
    return({type: ADD_FAVORITES, payload:movie});
}

export const removeFavorites = (id)=> {
    return({type: REMOVE_FAVORITES, payload:id});
}