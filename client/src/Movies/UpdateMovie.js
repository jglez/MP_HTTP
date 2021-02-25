import React, { useState } from 'react'

function UpdateMovie(props) {
  const [movieFormValues, setMovieFormValues] = useState('')

  const { movies } = props

  // function updateMovie() {
  //   return 
  // }

  return (
    <>
      <h1>Edit the movie!</h1>

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