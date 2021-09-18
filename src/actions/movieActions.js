export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id) => {
    console.groupCollapsed('%cmovieActions.js: deleteMovie()', 'color: pink')
    console.log(`id: ${id}`)
    console.groupEnd('movieActions.js: deleteMovie')

    return ({ type: DELETE_MOVIE, payload: id });
}