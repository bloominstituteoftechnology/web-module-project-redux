import { bindActionCreators } from "redux";

export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = () =>{
    return ({type: ADD_MOVIE});
}

export function toggleFavorites() {
    return{type: TOGGLE_FAVORITES};
}

export const addFavorites = (id)=>{
    return({type: ADD_FAVORITE, payload:id});
}
export const removeFavorite = (id)=>{
    return({type: DELETE_FAVORITE, payload:id});
}