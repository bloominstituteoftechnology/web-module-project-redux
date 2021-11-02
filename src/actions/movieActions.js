export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_MOVIE_TO_FAV = "ADD_MOVIE_TO_FAV";
export const TOGGLE_FAV = "TOGGLE_FAV";
export const REMOVE_FAV = "REMOVE_FAV";


export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movieObj)=>{
    return({type: ADD_MOVIE, payload:movieObj});
}

export const addMovieToFav = (movieObj)=>{
    return({type: ADD_MOVIE_TO_FAV, payload:movieObj});
}

export const toggleFav = (status)=>{
    return({type: TOGGLE_FAV, payload:status});
}

export const removeFav = (movieId)=>{
    return({type: REMOVE_FAV, payload:movieId});
}