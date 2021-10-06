import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from './../actions/favoritesActions';

const initialState = {
	favorites: [{title: "Movie", id: 1}],
	displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case (TOGGLE_FAVORITES): {
			return {
				...state,
				displayFavorites: !state.displayFavorites
			}
		}
		case (ADD_FAVORITES): {
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			}
		}
		case (REMOVE_FAVORITES): {
			return {
				...state,
				favorites: state.filter(item =>(item.id !== action.payload))
			}
			}
		default:
			return (state);
	}
}

export default favoritesReducer;