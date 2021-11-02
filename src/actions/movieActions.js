export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (newMovie) =>{
    return({type: ADD_MOVIE, payload: newMovie})
}

export const addFavorite = (e) =>{
    return({type: ADD_FAVORITE, payload: e})
}

export const deleteFavorite = (e) =>{
    return({type: DELETE_FAVORITE, payload: e})
}
export const toggleFavorite = (e) =>{
    return({type: TOGGLE_FAVORITE})
}
