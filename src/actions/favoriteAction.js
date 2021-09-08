export const ADD_FAVORITES = "ADD_FAVORITES";

export const addFavorite = (movie) => {
  return { type: ADD_FAVORITES, payload: movie };
};
