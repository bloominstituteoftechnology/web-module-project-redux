import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import reducer from '../reducers';
import { initialState } from '../reducers/movieReducer';

const MovieHeader = () => {

    const [state] = useReducer(reducer, initialState);
    const { appTitle, displayFavorites } = state;

    console.groupCollapsed('%cMovieHeader component', 'color: yellow')
    console.log('%cProps: ', 'color: yellow')
    console.table(state)
    console.groupEnd('MovieHeader component')

    const handleClick = () => {
        
    }


    return (<div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>{appTitle}</h2>
            </div>
            <div className="col-sm-6 headerBar">
                <div className="btn btn-sm btn-primary" onClick={handleClick} ><span>{displayFavorites ? "Hide" : "Show"} Favorites</span></div>
                <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
                <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return ({
        appTitle: state.appTitle,
        displayFavorites: state.displayFavorites
    })
}

export default connect(mapStateToProps, {})(MovieHeader);