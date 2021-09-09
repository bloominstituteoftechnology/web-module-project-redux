import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoitesAction';


const FavoriteMovieList = (props) => {
    console.log('FavoriteMovieList ln: 7 props: ', props) 
    // const favorites = [];
    const favorites = props.favorites;
    const removeFavorite = props.removeFavorite 

    // const useRemoveFavorite = (movie) => {
    //     console.log('FavoriteMovieList ln:13 RemoveFavorite movie', movie);
    //     props.removeFavorite(movie.id)
    // }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span className="material-icons" onClick={()=>{removeFavorite(movie.id)}}>remove_circle</span>
                            {/* <span className="material-icons" onClick={useRemoveFavorite}>remove_circle</span> */}
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {
    console.log('FavoriteMoviesList.js ln:27 state: ', state)
    return({
        favorites: state.favoritesReducer.favorites
    })
}

// export default FavoriteMovieList;
export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList)