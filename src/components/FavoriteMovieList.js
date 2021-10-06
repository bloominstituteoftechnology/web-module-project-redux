import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const { id } = useParams();
    const movie = props.favorites.find(movie=>movie.id===Number(id));
    console.log(props.favorites);
    
    const handleRemove = (e) => {
        props.removeFavorite(props.favorites);
    }
   
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={handleRemove} class="material-icons">remove_circle</span></span>
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