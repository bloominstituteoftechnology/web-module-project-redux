export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';

export const addToFavorites = id => {
    return({ type: ADD_TO_FAVORITES, payload: id })
}