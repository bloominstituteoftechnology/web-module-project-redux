import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayFavorites } from '../actions/favoriteActions';

const MovieHeader = (props) => {

    const [button, setButton] = useState(true)

    const handleDisplayFavorites = () => {
        props.displayFavorites()
        setButton(!button)
    }
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span onClick={handleDisplayFavorites}>{ button ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({
        appTitle: state.movie.appTitle,
        displayFavorites: state.favoriteMovie.displayFavorites
    })
}
export default connect(mapStateToProps, {displayFavorites})(MovieHeader);