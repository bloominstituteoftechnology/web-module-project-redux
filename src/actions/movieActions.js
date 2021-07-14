export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie) => {
    return({type: ADD_MOVIE, payload: movie})
}

export const toggleFavorites = () => {
    
    return({type: TOGGLE_FAVORITES})
}

export const addFavorite = (movie) => {
    console.log("inside the moviesActions.js", movie);
    return({type:ADD_FAVORITE, payload:movie})
}

export const removeFavorite = (id) => {
    return({type:REMOVE_FAVORITE,  payload:id})
}