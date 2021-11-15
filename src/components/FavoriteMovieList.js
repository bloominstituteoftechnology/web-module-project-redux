import React from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {deleteFavorites} from '../actions/favoritesActions'
const FavoriteMovieList = (props) => {
    const {favorites, displayFavorites, deleteFavorites} = props;
    console.log(favorites)
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons"  onClick={() => {
                            deleteFavorites(movie.id)
                        }}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {
    return ({
        favorites: state.favoriteReducer.favorites,
        displayFavorites: state.favoriteReducer.displayFavorites
    })
}

export default connect(mapStateToProps,{deleteFavorites}) (FavoriteMovieList);