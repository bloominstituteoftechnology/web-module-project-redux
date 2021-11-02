import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from "react-redux";

const MovieList = (props)=> {
    const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>{props.movies.title}</th>
                    <th>{props.movies.director}</th>
                    <th>{props.movies.genre}</th>
                    <th>{props.movies.metascore}</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        props.movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    return{
movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);