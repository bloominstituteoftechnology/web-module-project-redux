import { bindActionCreators } from "redux";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export function toggleFavorites() {
    return{type: TOGGLE_FAVORITES};
}

export const addFavorites = (title)=>{
    return({type: ADD_FAVORITE, payload: title});
}
export const removeFavorite = (id)=>{
    return({type: DELETE_FAVORITE, payload:id});
}