export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    console.log('movieActions.js ln:4 id:', id);
    return({type: DELETE_MOVIE, payload:id});
}

