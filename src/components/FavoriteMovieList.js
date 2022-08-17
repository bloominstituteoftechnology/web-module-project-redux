import React from 'react';
import { connect } from 'react-redux'
import * as favActions from '../actions/favoritesActions'

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favoritesReducer.favoriteMovies;

     return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                   {movie.title && <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                         <span><span onClick={()=>props.removeFavorite(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> }
                </div>
            })
        }
    </div>);
}


export default connect(st => st, favActions)(FavoriteMovieList);