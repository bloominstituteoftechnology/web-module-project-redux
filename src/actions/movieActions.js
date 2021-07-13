export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const FAVORITE_MOVIE = "FAVORITE_MOVIE";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload: movie})
}

export const favoriteMovie = (id) => {
    return({type: FAVORITE_MOVIE, payload: id})
}