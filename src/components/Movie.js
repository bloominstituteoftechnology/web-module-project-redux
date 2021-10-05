import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';
import { connect } from 'react-redux';
import { addFavorite } from '../actions/favoritesAction';

const Movie = (props) => {
    const { id } = useParams();
    const history=useHistory();
    
    const movie = props.movies.find(movie=>movie.id===Number(id));

    
    const favoriteAdd = () => {
        props.addFavorite(movie)
        
    }
    const handleClick = () => {
        props.deleteMovie(movie.id);
        history.push('/movies/')
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
                            <span onClick={favoriteAdd}className="m-2 btn btn-dark">Favorite</span>
                            <span onClick={handleClick}className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = (state)=>{
    return {    
        movies: state.movieState.movies,
        displayFavorites: state.favoritesState.displayFavorites
    }
}

export default connect (mapStateToProps, {addFavorite,deleteMovie})(Movie);