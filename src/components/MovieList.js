import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';


const MovieList = (props)=> {
    const movies = props.movies;

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

const mapStateToProps=(state)=>{
    return{
        movies: state.movieReducer.movies
    }
}

export default connect(mapStateToProps)(MovieList)