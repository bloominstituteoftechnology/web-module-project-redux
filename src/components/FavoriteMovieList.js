import React from "react";
import { connect } from "react-redux";
import { removeFav } from "../actions/favoriteActions";
import { Link } from "react-router-dom";

const handleRemoveClick = (e) => {
  console.log(e);
  // props.removeFav
};

const FavoriteMovieList = (props) => {
  const favorites = props.favorites;
  console.log("favorites movie list: ", favorites);
  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
              {movie.title}
              <span>
                <span onClick={handleRemoveClick} className="material-icons">
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
  return {
    favorites: state.favoriteReducer.favorites,
  };
};

export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);
