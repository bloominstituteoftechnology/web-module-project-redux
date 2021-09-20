import React, { useReducer } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import MovieList from './components/MovieList';
import Movie from './components/Movie';

import MovieHeader from './components/MovieHeader';

import AddMovieForm from './components/AddMovieForm';
import FavoriteMovieList from './components/FavoriteMovieList';
import reducer from "./reducers";
import { initialState } from "./reducers/favoritesReducer";

const App = () => {

  const [state] = useReducer(reducer, initialState)

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png" />Redux Module Project</span>
      </nav>

      <div className="container">
        <MovieHeader />
        <div className="row ">
          {state.displayFavorites && <FavoriteMovieList />}

          <Switch>
            <Route exact path="/movies/add">
              <AddMovieForm />
            </Route>

            <Route path="/movies/:id">
              <Movie />
            </Route>

            <Route path="/movies">
              <MovieList />
            </Route>

            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return ({
    displayFavorites: state.displayFavorites
  })
}

export default connect(mapStateToProps, {})(App);