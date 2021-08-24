import React from 'react';
// must import connect
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    // pulling movie names out of props
    const { movies } = props;
    console.log(props)
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
// Make map state to props
const mapStateToProps = state => {
    //console.log(state);
    return {
        movies: state.movies
    }
}
    
// connect your higher order method here
export default connect(mapStateToProps)(MovieList);