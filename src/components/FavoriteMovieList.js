import React from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {deleteFavorite} from "../actions/movieActions"


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>

        {   
            props.displayFavorites && 
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={()=>props.deleteFavorite(movie.id)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) =>{
    return{
        favorites: state.favorite.favorites,
        displayFavorites: state.favorite.displayFavorites
    }
}

export default connect(mapStateToProps,{deleteFavorite})(FavoriteMovieList);