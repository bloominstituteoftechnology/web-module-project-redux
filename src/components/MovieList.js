import React, { useReducer } from 'react';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import { connect } from 'react-redux';
import { initialState } from '../reducers/movieReducer';
import reducer from '../reducers';

const MovieList = () => {

    const [state] = useReducer(reducer, initialState)

    const { movies } = state;

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
                        movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)
                    }
                </tbody>
            </table>

            <MovieFooter totalMovies={movies.length} />
        </div>
    );
}

const mapStateToProps = state => {
    return ({ movies: state.movies })
}

export default connect(mapStateToProps, {})(MovieList);
