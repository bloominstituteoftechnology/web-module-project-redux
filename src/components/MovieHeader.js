import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { toggleFavorites } from '../actions/movieActions'

const MovieHeader = (props) => {
    const appTitle = props.appTitle;
    console.log('APPTITLE', props.appTitle)
    const displayFavorites = props.displayFavorites;

    const toggleFav = () => {
        props.toggleFavorites()
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div onClick={toggleFav} className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = (state) => {
    return({appTitle:state.movieReducer.appTitle, displayFavorites:state.favoritesReducer.displayFavorites})
}

export default connect(mapStateToProps, {toggleFavorites}) (MovieHeader);