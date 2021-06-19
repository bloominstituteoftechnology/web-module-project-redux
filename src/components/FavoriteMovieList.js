import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import { Link } from 'react-router-dom';
import { id } from 'postcss-selector-parser';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const handleFavoriteRemove = (e) => {
        props.removeFavorite(e)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span title={movie.id} onClick={() => {handleFavoriteRemove(movie.id)}} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoritesList.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavorite: (id) => dispatch(removeFavorite(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMovieList);