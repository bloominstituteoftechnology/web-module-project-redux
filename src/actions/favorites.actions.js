export const TOGGLE_FAVORITES = 'Toggle Favorites'
export const ADD_FAVORITES = 'Add Favorites'
export const REMOVE_FAVORITE = 'Remove Favorite'

export const toggleFavoritesAction = () => {
    return ({ type: TOGGLE_FAVORITES })
}

export const addFavoriteAction = (newFavorite) => {
    return ({ type: ADD_FAVORITES, payload: newFavorite })
}
export const removeFavoriteAction = (id) => {
    return ({ type: REMOVE_FAVORITE, payload: id })
}

