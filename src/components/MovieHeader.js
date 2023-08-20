import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = (props) => {
    const appTitle = props.appTitle;
    const {displayFavorites, toggleFavorites} = props;
    
    const handleClick = () => {
        toggleFavorites();
    }

    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={handleClick} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        displayFavorites: state.favoriteReducer.displayFavorites,
        appTitle: state.movieReducer.appTitle
    }
}

export default connect(mapStateToProps, {toggleFavorites})(MovieHeader);