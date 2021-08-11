export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";

export const deleteMovie = (id)=>
{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (id)=>
{
    return({type: ADD_MOVIE, payload: id});
}

export const toggleFavorites = (id) =>
{
    return({type: TOGGLE_FAVORITES});
}

export const addFavorites = (id) =>
{
    return({type: ADD_FAVORITES, payload: id});
}

export const deleteFavorites = (id) =>
{
    return({type: DELETE_FAVORITES, payload: id});
}