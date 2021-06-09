export const initialState = {
    // favorites: [{
    //     id: '',
    //     title: '',
    //     director: '',
    //     metascore: '',
    //     genre: '',
    //     description: ''
    // }],
    favorites: [{test: ''}],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    // switch (action.type) {
        // case : 
        //     return {
        //         ...favorites,

        //     }
    //     default: 
    //         return state;
    // }
    return state;
}


// Add in reducer cases, action creators and event handler code for the following actions:
//   - toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
  
//   - addFavorites: Adds in a new movie object into the favorites list.
//   - removeFavorite: Removes a movie Object from the favorites list with an id passed in.

export default favoritesReducer;
