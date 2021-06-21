import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from './../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;

    const handleClick = (id) => {
        removeFavorite(id);
    }

    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/`}>
                        {movie.title}
                        <span onClick={() => {handleClick(movie.id)}} ><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites, 
        displayFavorites: state.movie.movies
    }
}

export default connect(mapStateToProps, {removeFavorite}) (FavoriteMovieList);