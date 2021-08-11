export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};

export const addFavorite = (movie) => {
  return {
    type: ADD_FAVORITES,
    playload: movie,
  };
};

export const deleteFavorites = (id) => ({
  type: DELETE_FAVORITES,
  playload: id,
});
