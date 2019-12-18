/* jshint esversion: 6 */
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";



import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );


  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Switch>

      <Route path="/movies/:movieID">
        <Movie/>
      </Route>

        <Route path="/">
          <MovieList />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
