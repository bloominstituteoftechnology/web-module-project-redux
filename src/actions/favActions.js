export const TOGGLE_FAVS = "TOGGLE_FAVS";
export const ADD_FAV = "ADD_FAV";

export const toggleFavorites = () => {
  return {type: TOGGLE_FAVS};
}

export const addFavorite = (movie) => {
  return {type: ADD_FAV, payload: movie};
}