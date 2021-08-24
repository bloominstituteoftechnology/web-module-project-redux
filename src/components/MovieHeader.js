import React from 'react';
import { Link } from 'react-router-dom';
// 1. import connect
import { connect } from 'react-redux';

const MovieHeader = (props) => {
    // 4. replace this code with grabbing appTitle out of props
    const { appTitle } = props;
   // const appTitle = "";
    const displayFavorites = true;
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}
// 3. Make map state to props
const mapStateToProps = state => {
    return {
        appTitle: state.appTitle
    }
}
// 2. connect higher order method
export default connect(mapStateToProps)(MovieHeader);