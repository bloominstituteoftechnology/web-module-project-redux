import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
  const { favorites } = props;
  console.log(favorites);

  const handleRemove = (id) => {
    props.removeFavorite(id);
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  onClick={() => handleRemove(movie.id)}
                  class="material-icons"
                >
                  remove_circle
                </span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.favoritesReducer.favorites,
    displayFavorites: state.favoritesReducer.displayFavorites,
  };
};

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
