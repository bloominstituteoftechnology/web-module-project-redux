import { ADD_FAV, REMOVE_FAV, TOGGLE_FAVS } from "../actions/favActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(TOGGLE_FAVS):
      return ({
        ...state,
        displayFavorites: !state.displayFavorites,
      });
    
    case(ADD_FAV):
      return ({
        ...state,
        favorites: [...state.favorites, {...action.payload}],
      });

    case(REMOVE_FAV):
      return ({
        ...state,
        favorites: state.favorites.filter(movie => movie.id !== action.payload),
      })
    
    default:
      return state;
  }
}

export default reducer;