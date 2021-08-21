import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { deleteFavorites } from '../actions/movieActions'


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    const { push } = useHistory()
    const deleteFavoriteHandler = (id) => {
        props.deleteFavorites(id)
        push('/movies')
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={deleteFavoriteHandler}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapToProps = (state) => {
    return {favorites:state.favoritesReducer.favorites}
}

export default connect(mapToProps, {deleteFavorites}) (FavoriteMovieList)