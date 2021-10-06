export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = ({id, title, director, genre, metascore, description})=> {
    console.log({id, title, director, genre, metascore, description})
    return({type:ADD_MOVIE, payload:{id, title, director, genre, metascore, description}});
    
}