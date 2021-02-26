import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UpdateMovie(props) {
  const [movieFormValues, setMovieFormValues] = useState('')

  const { movieToUpdate } = props

  // function updateMovie() {
  //   return 
  // }

  return (
    <>
      <h1>Edit the movie!</h1>

      <h2>Title: {movieToUpdate.title}</h2>

      <h3>Director: {movieToUpdate.director}</h3>

      <h3>Metascore: {movieToUpdate.metascore}</h3>

      <h3>Actors:</h3>

      <ul>
        {movieToUpdate.stars.map(actor => {
          return <li key={actor}>{actor}</li>
        })}
      </ul>

      {/* <form>
        <input
          name='movie'
          type='text'
        />
      </form> */}
    </>
  )
}

export default UpdateMovie