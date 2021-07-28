import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoriteActions'; 



const FavoriteMovieList = (props) => {
    // const favorites = [];

    const removeFavoriteClick = movie => {
        props.removeFavorite(movie)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={removeFavoriteClick}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favoriteReducer.favorites
    }
}

export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);