export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovie = (id)=>{
    // console.log('movieActions.js ln:5 id:', id);
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) =>{
    // console.log('movieActions.js ln:10 movie:', movie)
    return({ type: ADD_MOVIE, payload:movie })
}



