import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorites } from '../actions/movieActions';


const MovieHeader = (props) => {
    console.log('MovieHeader.js ln:7 props', props);
    // const appTitle = "";
    const appTitle = props.appTitle;
    // const displayFavorites = true;
    const displayFavorites = props.displayFavorites;
    const toggleFavorites = props.toggleFavorites;
    const useToggleFavorites = () => {
        toggleFavorites();
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" onClick={useToggleFavorites}><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    console.log('MovieHeader.js ln:33 state:', state);
    return {
        appTitle: state.appTitle,
        displayFavorites: state.favoritesReducer.displayFavorites
    }
}

// export default MovieHeader;
export default connect(mapStateToProps, {toggleFavorites})(MovieHeader);