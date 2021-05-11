// * [ ] Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:
//   -  favorites: an array of movie objects
//   -  displayFavorites: a boolean that holds if favorite elements should be displayed in app

export const initialState = {
    movie: movie,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case("ADD_MOVIE"):
            const newMovie = {
                name: action.payload,
                appTitle: false
            };

            return {
                ...state,
                movie: [...state.movie, newMovie]
            }
        default:
            return state
    }
}

export default reducer;