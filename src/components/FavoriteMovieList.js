import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favActions';


const FavoriteMovieList = (props) => {
    const { favorites, removeFavorite } = props;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons" onClick={
                            (ev) => {
                                ev.preventDefault(); // prevents removing favorite from navigating to removed movie
                                removeFavorite(movie.id)
                            }
                        }>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favReducer.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);