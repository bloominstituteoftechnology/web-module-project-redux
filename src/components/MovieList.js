import React from "react";

import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";
import { connect } from "react-redux";

const MovieList = (props) => {
  const movies = [];
  console.log(props);

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
          {props.movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </tbody>
      </table>

      <MovieFooter totalMovies={props.movies.length} />
    </div>
  );
};

// which values from state should be provided as props?
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

// dispatching functions that handle state updates relevant to this component
// const mapDispatchToProps = () => {

// }

// the connect function returns a Higher Order Component or decorator function.
// we invoke the decorator or enhancer function on our component in order to enhance it with the ability to:
// read state from the store and update the store by dispatching the reducer

// in connect(mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, {})(MovieList);
