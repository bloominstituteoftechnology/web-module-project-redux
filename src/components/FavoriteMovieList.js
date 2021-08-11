import React from 'react';
import { connect } from 'react-redux'
import { deleteFavorite } from '../actions/favoriteActions';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    const { push } = useHistory()

    // const handleRemove = (id) => {
    //     props.deleteFavorite(id)
    // }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=> {return (props.deleteFavorite(movie.id))}} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
    favorites: state.favoriteReducer.favorites
    })
}


export default connect(mapStateToProps, {deleteFavorite})(FavoriteMovieList);