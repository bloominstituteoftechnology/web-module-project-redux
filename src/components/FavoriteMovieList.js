import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import movies from '../data';
import favoritesReducer from '../reducers/favoritesReducer';
import { removeFavorite } from './../actions/movieActions';


const FavoriteMovieList = (props) => {
    // const favorites = [];
    
    const removeClick = (id) => {
        props.removeFavorite(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/`}>
                        {movie.title}
                        <span><span onClick={() => removeClick(movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    console.log("Favorite Movie List: state" ,state)
    return {
        favorites: state.favorites.favorites,
        movies: state.movie.movies
    }
}

const mapActionsToProps = {
    removeFavorite
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);

// export default FavoriteMovieList;