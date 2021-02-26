import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie'
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieToUpdate, setMovieToUpdate] = useState([])

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        console.log('GET request data:', res.data)
        setMovieList(res.data)
      })
      .catch(err => console.log(err.response));
  };

  console.log('movieList state:', movieList)

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const addMovieToUpdate = movie => {
    setMovieToUpdate(movie)
  }

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} addMovieToUpdate={addMovieToUpdate} />
      </Route>

      {/* dynamic url - component only renders when we add a number at the end */}
      <Route path='/update-movie/:id'>
        <UpdateMovie movieToUpdate={movieToUpdate} />
      </Route>
    </>
  );
};

export default App;
