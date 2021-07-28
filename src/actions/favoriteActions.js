export const ADD_FAVORITES = 'ADD_FAVORITES'
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'

export const addFavorite = newFavorite => {
    return ({type:ADD_FAVORITES, payload: newFavorite})
}

export const removeFavorite = id => {
    return({type: REMOVE_FAVORITES, payload: id})
}

export const toggleFavorites = (displayFavorites) => {
    return ({type: TOGGLE_FAVORITES, payload: displayFavorites})
}

