export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const ADD_FAVORITES = "ADD_FAVORITES";

export const REMOVE_FAVORITES = "REMOVE_FAVORITES";


export const toggleFavorites = () => 
{
    return ({ type: TOGGLE_FAVORITES });
};

export const addFavorites = () => 
{
    return ({ type: ADD_FAVORITES });
};

export const removeFavorites = () => 
{
    return ({ type: REMOVE_FAVORITES });
};