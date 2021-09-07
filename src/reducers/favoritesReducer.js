const initialState = {
  favorites: [],
  displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
  switch(action.type) {
    case(TOGGLE_FAVORITES):
      
    case(ADD_FAVORITES):
    case(REMOVE_FAVORITES):
    default:
      return(state);
  }
}

export default favoritesReducer;