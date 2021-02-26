import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

// This component is rendered whenever a movie is clicked on
// It's essentially a single MovieCard component with an additional
// psuedo-div-button for saving the specific movie
// We create a new slice of state called 'Movie' which stores the information
// of the single movie that was clicked on. This is handled by passing the id
// of the clicked on movie into the fetchMovie function where we do an API
// call for the information of the single movie by passing in the id

// When we click the Save button the saveMovie handler is fired which executes
// the addToSavedList function which was passed through props from App
// and we pass the clicked on movie's body of data into addToSavedList
// Inside of addToSavedList we capture the movie's information through args
// and use the setSavedList setter function to add the movie to our
// savedList state which will be passed into the SavedList component and be 
// rendered at the top

function Movie(props) {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const { addToSavedList, addMovieToUpdate } = props
  const history = useHistory()

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const routeToUpdate = () => {
    // we already have the info for the movie in the movie slice of state
    // we need to reroute to '/update-movie/:id' while preventing a reload
    // We need React-Router's version of the History API
    addMovieToUpdate(movie)
    history.push(`/update-movie/${movie.id}`)
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  console.log('Movie Object', movie)

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <div className='update-button' onClick={routeToUpdate}>
        Update
      </div>
    </div>
  );
}

export default Movie;
