// Action Strings
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// Action Creators
export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (id) => {
  return { type: ADD_MOVIE, payload: id };
};

export const addFavorite = (id) => {
  return { type: ADD_FAVORITE, payload: id };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const toggleFavorite = (favorite) => {
  return { type: TOGGLE_FAVORITE, payload: favorite };
};
