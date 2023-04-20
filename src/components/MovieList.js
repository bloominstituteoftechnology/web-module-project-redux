import React from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';

// * [ ] **The MovieList component prints all of our movies to the screen.** Use the connect method here to map the movies state value into props. Replace our static movie variable with that prop.


const MovieList = (props)=> {
    const {movies} = props;

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
            
            <MovieFooter totalMovies={props.movies.length}/>
        </div>
    );
}


const mapStateToProps = state => {
    return {
      movies: state.movies,
    }
  }

export default connect(mapStateToProps, {})(MovieList)
// export default MovieList;