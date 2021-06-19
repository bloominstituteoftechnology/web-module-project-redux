import React from 'react';
import { connect } from 'react-redux';
import { addFavorites, removeFavorite } from '../actions/movieActions';
import { Link } from 'react-router-dom';
import { id } from 'postcss-selector-parser';


const FavoriteMovieList = (props) => {
    const favorites = [];
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${props.movie.id}`}>
                        {props.movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        movies: state.movieList.movies,
        favorites: state.favoritesList.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavorites: (id) => dispatch(addFavorites(id)),
        removeFavorite: (id) => dispatch(removeFavorite(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);