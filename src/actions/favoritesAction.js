export const TOGGLE = "TOGGLE"
export const ADD_FAVORITE = "ADD_FAVORITE"

export const toggleFavorite = () => {

    return{type: TOGGLE}
}

export const addFavorite = (item) =>{
    return({type:ADD_FAVORITE, payload:item})
}