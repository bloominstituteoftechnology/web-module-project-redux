import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {  removeFav } from '../actions/movieActions';


const FavoriteMovieList = ({ favorites, displayFavorites, removeFav }) => {

    const handleRemove = (movieId) => {
        removeFav(movieId)
    }
    
    return (
    <div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            displayFavorites ?
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={() => handleRemove(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            }) : null
        }
    </div>
    )
}

const mapStateToProps = ({ favReducer }) => {
    return{
        favorites: favReducer.favorites,
        displayFavorites: favReducer.displayFavorites
  }
}

export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);
