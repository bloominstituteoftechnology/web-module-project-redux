import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteFavorites } from '../actions/movieActions';


const FavoriteMovieList = (props) => {
    const {id} = useParams();
    const favorites = [];
    
    const delHandler = () =>{
        props.deleteFavorites()
    }
    
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={delHandler}>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) =>{
    return({
        favorites : state.favoritesReducer.favorites
    })
}


export default connect(mapStateToProps,{deleteFavorites})(FavoriteMovieList);