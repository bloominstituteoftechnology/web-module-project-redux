import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from "react-redux"
import {deleteMovie} from "./../actions/movieActions"

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const {movies, displayFavorites, addFavorite } = props;
    const movie = movies.find(movie=>movie.id===Number(id));

    const handleDeleteMovie = () =>{
        deleteMovie(movie.id)
        push('/movies')
    } 
    const handleFavorite = () =>{
        addFavorite(movie);
    }
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                        {displayFavorites && <span className="m-2 btn btn-dark" onClick={handleFavorite} >Favorite</span>}
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" onClick={handleDeleteMovie} value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
const mapActionsToProps = {
    deleteMovie: deleteMovie
}
const mapPropsToState = (state)=>{
    return({
        movies: state.movieReducer.movies,
        displayFavorites: state.favoriteMoviesReducer.displayFavorites
    })
}
export default connect(mapPropsToState, mapActionsToProps)(Movie);