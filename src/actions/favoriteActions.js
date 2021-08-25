export const ADD_FAVORITE = "ADD_FAVORITE";
export const TOGGLE_DISPLAY_FAVORITES = "TOGGLE_DISPLAY_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (newFavorite) => {
    return {
        type: ADD_FAVORITE,
        payload: newFavorite,
    };
};

export const toggleDisplayFavorites = () => {
    return {
        type: TOGGLE_DISPLAY_FAVORITES,
    };
};

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    };
};