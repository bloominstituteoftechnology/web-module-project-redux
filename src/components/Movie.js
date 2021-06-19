import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie, addFavorites, removeFavorite } from '../actions/movieActions';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = [];
    const movie = props.movies.find(movie=>movie.id===Number(id));

    const handleDelete = () => {
        props.deleteMovie(movie.id);
        push('/movies')
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
                            <span className="m-2 btn btn-dark" onClick={props.addFavorites}>Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" 
                            onClick={handleDelete}
                            /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieList.movies,
        displayFavorites: state.favoritesList.displayFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (id) => dispatch(deleteMovie(id)),
        addFavorites: (id) => dispatch(addFavorites(id)),
        removeFavorite: (id) => dispatch(removeFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);