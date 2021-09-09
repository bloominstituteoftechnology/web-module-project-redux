import React from 'react';

import { connect }  from 'react-redux'; //step 4 import connect

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import movies from '../data';

const MovieList = (props)=> {
    const { movies } = props;//step 8 construct props and movies all together 

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

const mapStateToProps = (state) => {//step 6 
return({
    movies:state.movieReducer.movies
})
}


export default connect(mapStateToProps)(MovieList);//step 5 overlap // step 7 putting line 36 into connect 