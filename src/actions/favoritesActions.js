export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const toggleFavorites = ()=> {
    console.log("in toggleEditing")
    return { type: TOGGLE_FAVORITES };
}

export const addFavorite = ({id, title, director, genre, metascore, description})=> {
    console.log("adding now")
    return { type: ADD_FAVORITE, payload: {id, title, director, genre, metascore, description}}
}

export const removeFavorite = ({id, title, director, genre, metascore, description}) => {
    console.log({id, title, director, genre, metascore, description})
    return { type: REMOVE_FAVORITE, payload: {id, title, director, genre, metascore, description} }
}