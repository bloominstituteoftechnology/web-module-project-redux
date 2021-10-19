import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFavorite } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {
    const handleRemove = (id) => {
        props.deleteFavorite(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=>{handleRemove(movie.id)}}><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


const mapStateToProps = (state)=> {
    return {
        favorites: state.favoritesState.favorites,
    }
}

export default connect(mapStateToProps, {deleteFavorite})(FavoriteMovieList);