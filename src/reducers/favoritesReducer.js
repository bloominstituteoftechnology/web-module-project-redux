const initialState = {
    favorites: [],
    displayFavorites: false
}

const favReducer = (state = initialState, action) =>{
    // console.log('favoritesReducer ln:7 state', state);
    // console.log('favoritesReducer ln:8 state', action);
    switch(action.type){
        case "TOGGLE_FAVORITES":
            return {
                ...state, 
                displayFavorites: !state.displayFavorites
            };
        default: 
        return state;

    }
}
export default favReducer;