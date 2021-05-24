import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorite } from '../actions/movieActions';

const mapStatetoProps = (state) => {
    return ({
        appTitle: state.appTitle,
        displayFavorites: state.displayFavorites
    })
}

const MovieHeader = (props) => {
    const appTitle = props.appTitle;

    const handleToggle = () => {
        props.toggleFavorite(props.displayFavorites)
    }

    return (<div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>{appTitle}</h2>
            </div>
            <div className="col-sm-6 headerBar">
                <div className="btn btn-sm btn-primary"> <span onClick={handleToggle}> {props.displayFavorites ? "Hidden" : "Shown"} Favorites </span></div>
                <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
                <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            </div>
        </div>
    </div>);
}

export default connect(mapStatetoProps, { toggleFavorite })(MovieHeader);