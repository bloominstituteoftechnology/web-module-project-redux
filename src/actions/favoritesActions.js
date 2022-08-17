export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const DISABLE_FAVORITE_BUTTON = 'DISABLE_FAVORITE_BUTTON'

export const toggleFavorites = ()=> {
    return({type: TOGGLE_FAVORITES});
}

export const addFavorite = (movie)=> {
    return({type: ADD_FAVORITE, payload:movie});
}

export const removeFavorite = (id)=> {
    return({type: REMOVE_FAVORITE, payload:id});
}

export const disableButton = (id) => {
    return ({type: DISABLE_FAVORITE_BUTTON, payload: id})
}