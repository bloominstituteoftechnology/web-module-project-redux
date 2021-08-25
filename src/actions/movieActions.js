export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

export const deleteMovieAction = (id) => {
    return ({ type: DELETE_MOVIE, payload: id });
}
// export const addMovieAction = (newMovie) => {
//     // return ({ type: ADD_MOVIE, payload: newMovie })
// }

export const addMovieAction = (id) => {
    return ({ type: ADD_MOVIE, payload: id })
}