export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITES, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITES, payload: id };
};
