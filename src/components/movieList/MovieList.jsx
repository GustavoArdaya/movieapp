import React, { useEffect, useState } from 'react'

import styles from './movieList.module.css'
import movieService from '../../apiService/movieService'
import MovieCard from '../MovieCard/MovieCard'
import DeleteToast from '../DeleteToast/DeleteToast'

export default function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    movieService.getAll().then((data) => setMovies(data))
  }, [])

  const deleteById = (idToDelete) => {
    let newData = movies.filter((movie) => movie.id !== idToDelete)
    setMovies(newData)
  }

  return (
    <div>
      <div className={styles.movieList}>
        {movies.map((item) => (
          <MovieCard key={item.id} item={item} deleteById={deleteById} />
        ))}
      </div>
      <DeleteToast></DeleteToast>
    </div>
  )
}

// <div>
// <Navbar />
// <ul className={styles.movieList}>
//   {movies.map((item) => (
//     <li key={item.id}><MovieCard /></li>

//   ))}
// </ul>

// <Footer />
// </div>
