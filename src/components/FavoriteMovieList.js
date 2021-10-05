import React from 'react';

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
                        <span><span class="material-icons" onClick={handleRemove}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return{
        favorites: state.favoriteState.favorites
    }
}

export default connect(mapStateToProps)(FavoriteMovieList);