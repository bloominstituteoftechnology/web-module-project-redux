import { ADD_FAVORITE } from './../actions/favoriteActions'

export const initialState = {
    favorite: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorite: [{...state, title: action.payload}],
                displayFavorites: true

            }
        }
        default:
            return state;
    }
}

export default favoriteReducer