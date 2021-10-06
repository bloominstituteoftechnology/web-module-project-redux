import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorites } from '../actions/favoriteActions';



const FavoriteMovieList = (props) => {

    const handleRemove = (id) => {
        props.dispatch(removeFavorites(id));
        
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={() => {handleRemove(movie.id)}}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return{
        favorites: state.favoriteState.favorites,
        movies: state.movieState.movies
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);