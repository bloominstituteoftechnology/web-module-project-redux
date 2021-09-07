import React from 'react';
import { connect } from "react-redux"

import { Link } from 'react-router-dom';
import favoriteMoviesReducer from '../reducers/favorites.reducer';
import { removeFavoriteAction } from '../actions/favorites.actions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const displayFavorites = props.displayFavorites;
    console.log('displayFavorites is:', displayFavorites)

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {!displayFavorites ? (favorites.map(movie => {
            return <div key={movie.id}>
                <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                    {movie.title}
                    <span onClick={() => props.removeFavoriteAction(movie.id)}> <span className="material-icons" > remove_circle</span></span>
                </Link>
            </div>
        })) : ''

        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favoriteMoviesReducer.favorites,
        displayFavorites: state.favoriteMoviesReducer.displayFavorites
    }
}

export default connect(mapStateToProps, { removeFavoriteAction })(FavoriteMovieList);