import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoriteActions.js';

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const { movies, displayFavorites, deleteMovie, addFavorite } = props;
    const movie = movies.find(movie => movie.id === Number(id));

    const handleFavorite = (movie) => {
        props.dispatch(addFavorite(movie));
        push('/movies');
    };

    const handleDelete = (id) => {
        props.dispatch(deleteMovie(id));
        push('/movies');
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
                            {displayFavorites && <span onClick={handleFavorite} className="m-2 btn btn-dark">Favorite</span>}
                            <span className="delete" onClick={handleDelete}><input type="button" className="m-2 btn btn-danger" value="Delete" /></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
const mapStatetoProps = state => {
    return ({
        displayFavorites: state.favoritesReducer.displayFavorites,
        movies: state.movie.movies,
    })
}

export default connect(mapStatetoProps, { addFavorite, deleteMovie })(Movie)
