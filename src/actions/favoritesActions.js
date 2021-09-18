export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export const toggleFavorites = () => {
    return({
        type:TOGGLE_FAVORITES
    })
}
export const addFavorites = (movie) => {
    console.log(movie)
    return({
        type:ADD_FAVORITE, payload: movie
    })
}
export const deleteFavorites = (movie) => {
    return({
        type:DELETE_FAVORITE, payload: movie
    })
}