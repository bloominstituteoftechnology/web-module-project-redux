import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteMovie, addFavorite } from "../actions/movieActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();

  const movies = props.movies;
  const movie = movies.find((movie) => movie.id === Number(id));

  const handleDeleteMovie = () => {
    props.deleteMovie(movie.id);
    push("/movies"); // redirects user back to the movies page
  };

  const handleAddFavorite = (e) => {
    props.addFavorite(movie);
  };

  return (
    <div className="modal-page col">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{movie.title} Details</h4>
          </div>
          <div className="modal-body">
            <div className="flexContainer">
              <section className="movie-details">
                <div>
                  <label>
                    Title: <strong>{movie.title}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Director: <strong>{movie.director}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Genre: <strong>{movie.genre}</strong>
                  </label>
                </div>
                <div>
                  <label>
                    Metascore: <strong>{movie.metascore}</strong>
                  </label>
                </div>
                <div>
                  <label>Description:</label>
                  <p>
                    <strong>{movie.description}</strong>
                  </p>
                </div>
              </section>

              <section>
                {props.displayFavorites ? null : (
                  <span
                    className="m-2 btn btn-dark"
                    onClick={handleAddFavorite}
                  >
                    Favorite
                  </span>
                )}
                <span className="delete">
                  <input
                    type="button"
                    className="m-2 btn btn-danger"
                    value="Delete"
                    onClick={handleDeleteMovie}
                  />
                </span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movies,
    // in the rootReducer we name our favoriteReducer favorites so
    // we need top dot notate to access the displayFavorites state
    displayFavorites: state.favorite.displayFavorites,
  };
};

export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie);
