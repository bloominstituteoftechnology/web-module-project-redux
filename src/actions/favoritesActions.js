export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const addToFavorites = (id) => {

    return ({
        type: ADD_TO_FAVORITES,
        payload: id
    })
}


export const removeFromFavorites = (id) => {

    return ({
        type: REMOVE_FROM_FAVORITES,
        payload: id
    })
}
