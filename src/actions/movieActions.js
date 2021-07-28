export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE"

export const addMovie = newMovie => {
    return({type:ADD_MOVIE, payload: newMovie})
}

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}