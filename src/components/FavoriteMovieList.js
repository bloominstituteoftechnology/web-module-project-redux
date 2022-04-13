import React from 'react';
import { connect } from "react-redux";
import { removeFav} from "../actions/favoriteActions.js"
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = props.favorites;
    
    const handleRemoveClick = (e) => {
        console.log(e.target.title)
        console.log(Number(e.target.title))
        e.preventDefault();
        props.removeFav(Number(e.target.title))
        // props.removeFav()
    }

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span title={movie.id} onClick={handleRemoveClick} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favoriteReducer.favorites
    }
}


export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);