import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { deleteFavorite } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const handleDelete = (e) => {
        const id = e.target.parentElement.parentElement.parentElement.getAttribute("postid");
        props.deleteFavorite(Number(id));
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}  postid={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons" onClick={(e) => handleDelete(e)}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteState.favorites
    };
}

const mapStateToDispatch = (dispatch) => {
    return {
        deleteFavorite: (id) => dispatch(deleteFavorite(id)),
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(FavoriteMovieList);