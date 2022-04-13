import { TOGGLE_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
    favorites: [],
    displayFavorites: true
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
      case TOGGLE_FAVORITE:
        return {
          ...state,
          displayFavorites: !state.displayFavorites
        };
      case ADD_FAVORITE:
        const found = state.favorites.find(item => item.id === action.payload.id);
        if (!found) state.favorites.push(action.payload);
        return {
          ...state,
          favorites: [...state.favorites]
        };
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter(item => (action.payload) !== item.id),
        };
      default:
          return state;
    }
};

export default reducer;