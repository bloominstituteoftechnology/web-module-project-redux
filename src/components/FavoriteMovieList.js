import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie => {
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link>
                </div>
            })
        }
    </div>);
}
const mapStateToProps = (state) => {
    return {
        favorites: state.favorites.favorites,
    }
}


export default connect(mapStateToProps,)(FavoriteMovieList);