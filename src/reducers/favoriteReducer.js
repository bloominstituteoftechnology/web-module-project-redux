import { TOGGLE_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoriteActions';

const initialState = {
    favorites: [],
    displayFavorites: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FAVORITE:
            return {
                favorites: !state.displayFavorites
            };

        case ADD_FAVORITE:
           state.favorites.push(action.payload);
            return {
                favorites: [...state.favorites]
            };

        case REMOVE_FAVORITE:
            return {
                favorites: state.favorites.filter(item => (action.payload) !== item.id)
            };

        default:
            return state;
    }
};
export default reducer;
