export const TOGGLE_FAVORITE = "TOGGLE_FAVORITES";

export const toggleFavorite = (favorite) => {
    return({type: TOGGLE_FAVORITE, payload:favorite});
}