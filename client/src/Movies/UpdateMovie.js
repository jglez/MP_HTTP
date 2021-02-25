import React, { useState } from 'react'

function UpdateMovie() {
  const [movieFormValues, setMovieFormValues] = useState('')

  return (
    <>
      <form>
        <input
          name='movie'
          type='text'
        />
      </form>
    </>
  )
}

export default UpdateMovie