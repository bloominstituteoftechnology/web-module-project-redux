import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../reducers';
import { initialState } from '../reducers/favoritesReducer';



const FavoriteMovieList = () => {

    const [state] = useReducer(reducer, initialState);

    console.groupCollapsed("%cFavoriteMovieList component", "color: yellow")
    console.log('%c:', 'color: orange')
    console.groupEnd("FavoriteMovieList component.js")

    const { favorites } = state;

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

const mapStateToProps = state => {
    return ({
        favorites: state.favorites
    })
}

export default connect(mapStateToProps, {})(FavoriteMovieList);