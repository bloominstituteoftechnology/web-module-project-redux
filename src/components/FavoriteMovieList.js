import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { removeFavorites } from "../actions/favoriteActions";

const FavoriteMovieList = (props) => {
  const removeFavorite = (ev) => {
    ev.preventDefault();
    props.removeFavorites(Number(ev.target.title));
  };

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {props.favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span
                  title={movie.id}
                  onClick={removeFavorite}
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

const mapStateAsProps = (state) => {
  return {
    favorites: state.favorites.favorites,
    displayFavorites: state.favorites.displayFavorites,
  };
};

export default connect(mapStateAsProps, { removeFavorites })(FavoriteMovieList);
