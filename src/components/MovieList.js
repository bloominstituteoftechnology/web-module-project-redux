import React from 'react';
import {connect} from "react-redux";
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (state)=> 
{
    //REplaced empty array with 
    const movies = state.movies;

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

//Map state to props, pass in state
const mapStateToProps = (state) =>
{
    //Return movie list from movie object initial state
   return  { movies: state.movieReducer.movies}
}

export default connect(mapStateToProps)(MovieList);