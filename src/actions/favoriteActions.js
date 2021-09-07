export const ADD_FAVORITE = "ADD_FAVORITE";

export const addFavorite = (name) => {
    return({type:ADD_FAVORITE, payload: name});
}