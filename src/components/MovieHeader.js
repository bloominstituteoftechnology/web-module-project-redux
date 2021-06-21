import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    const { appTitle, displayFavorites, toggleFavorites } = props;
 

    const handleToggle = () => {
        toggleFavorite();
    }
    

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleToggle} className="btn btn-sm btn-primary" ><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (props) => {
    return {
        appTitle: props.movie.appTitle, 
        displayFavorites: props.favorites.displayFavorites
    }
}

export default connect(mapStateToProps, {toggleFavorite})(MovieHeader);