import React from 'react';
import { connect } from 'react-redux';

const MovieFooter = (props)=> {


    return(<div className="clearfix footer">
        <div className="hint-text">Showing <b>{props.movies.length}</b> entries</div>
    </div>);
}

const mapStateToProps = state => {
    return{
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieFooter);