import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {

    const favorites = props.favorites;
    const displayFavorites = props.displayFavorites;

    const handleRemove = (id) => {
        props.dispatch(removeFavorite(id));
    };

    return displayFavorites && (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => handleRemove(movie.id)}><span class="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return({
        favorites: state.favorite.favorites,
        displayFavorites: state.favorite.displayFavorites
    });
}

export default connect(mapStateToProps)(FavoriteMovieList);