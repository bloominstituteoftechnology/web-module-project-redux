import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { deleteMovie } from '../actions/movieActions';
import { addFavorites } from '../actions/favoritesAction';

const Movie = (props) =>
{
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, deleteMovie, displayFavorites, addFavorites } = props;
    const movie = movies.find(movie => movie.id === Number(id));

    const handleDeleteMovie = () => 
    {
        deleteMovie(movie.id);
        push('/movie');
    };

    const handleFavoriteClick = (state) =>
    {
        addFavorites(movie);
    };

    return (<div className="modal-page col">
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
                            {displayFavorites && <span onClick={handleFavoriteClick} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete" onClick={handleDeleteMovie}><input type="button" className="m-2 btn btn-danger" value="Delete" /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
const mapStateToProps = (state) =>
{
    return ({
        displayFavorites: state.favoritesReducer.displayFavorites,
        movies: state.movieReducer.movies
    });
};

export default connect(mapStateToProps, { deleteMovie, addFavorites })(Movie);