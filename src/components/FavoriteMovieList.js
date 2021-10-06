import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const { favorites } = props;
    const { id } = useParams();
    
    
    const handleRemove = (id) => {
        props.removeFavorite(id);
    }
   
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=>{handleRemove(movie.id)}}><span  class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state)=> {
    return {
        favorites: state.favoritesState.favorites,
        displayFavorites: state.favoritesState.displayFavorites
    }
}

const mapActionsToProps = {
 removeFavorite:removeFavorite
}

export default connect(mapStateToProps, mapActionsToProps)(FavoriteMovieList);