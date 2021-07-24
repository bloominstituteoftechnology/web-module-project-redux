import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions'

const FavoriteMovieList = (props) => {
    const {favorites, removeFavorite} = props;
    
    const handleClick = id => {
        removeFavorite(id)
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={'/movies/'}>
                        {movie.title}
                        <span><span onClick={() => {handleClick(movie.id)}} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = state => {
    return {
        favorites: state.favorites.favorites,
        movies: state.movie.movies
    }
}

export default connect(mapStateToProps, {removeFavorite}) (FavoriteMovieList);