const initialState = {
    favorites: [],
    displayFavorites: false
}
const favoritesReducer = (state = initialState,action)=>{
    switch(action.type){
       case displayFavorites:
           return({type: ""})
           default:
            return state;
    }
    

}
export default favoritesReducer;