import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavorite } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const dltFav = (id) =>{
        props.deleteFavorite(id);
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick = {function(){dltFav(movie.id)}} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) =>{
    return{
        favorites: state.favorites
    }
   
}

export default connect(mapStateToProps,{ deleteFavorite })(FavoriteMovieList);