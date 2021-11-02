import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';

import { addFavorite } from '../actions/favoriteActions';

const Movie = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const [favButton, setFavButton] = useState(true)

    const movie = props.movies.find(movie=>movie.id===Number(id));
    
    const handleDeleteMovie = () => {
        props.deleteMovie(movie.id)
        history.push(`/movies`)
    }

    const handleAddFavorite = (obj) => {
        props.addFavorite(obj)
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
                            { props.favButton && <span className="m-2 btn btn-dark" onClick={()=>{handleAddFavorite(movie)}}>Favorite</span>}
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete" onClick={()=>{handleDeleteMovie(movie)}} /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps =(state)=> {
    return({
        movies: state.movie.movies,
        favButton: state.favoriteMovie.favButton
    })
}

export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie);