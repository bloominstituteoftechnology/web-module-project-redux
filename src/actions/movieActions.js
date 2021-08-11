export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = 'ADD_MOVIE'
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES'
export const ADD_FAVORITES = 'ADD_FAVORITES'
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export const deleteMovie = (id) => {
    return ({ type: DELETE_MOVIE, payload: id });
}
export const addMovie = newMovie => {
    return ({
        type: ADD_MOVIE,
        payload: newMovie
    })
}
export const toggleFavorites = () => {
    return {
        type: TOGGLE_FAVORITES,
    }
}
export const addFavorites = newFav => {
    return {
        type: ADD_FAVORITES,
        payload: newFav
    }
}
export const removeFavorites = id => {
    return {
        type: REMOVE_FAVORITES,
        payload: id
    }
}