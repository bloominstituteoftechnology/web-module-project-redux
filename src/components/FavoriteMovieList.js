import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    return (
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {
                favorites.map(movie=>{
                    return <div key={movie.id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                            {movie.title}
                            <span><span onClick={() => props.removeFavorite(movie.id)} class="material-icons">remove_circle</span></span>
                        </Link> 
                    </div>
                })
            }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteMoviesReducer.favorites,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => {
            dispatch(removeFavorite(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);