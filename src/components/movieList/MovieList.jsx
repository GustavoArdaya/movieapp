import React, { useEffect, useState } from 'react'

import styles from './movieList.module.css'
import movieService from '../../apiService/movieService'
import MovieCard from '../MovieCard/MovieCard'
import DeleteToast from '../DeleteToast/DeleteToast'
import DeleteModal from '../DeleteModal/DeleteModal'

export default function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    movieService.getAll().then((data) => setMovies(data))
  }, [])

  const deleteById = (idToDelete) => {
    let newData = movies.filter((movie) => movie.id !== idToDelete)
    setMovies(newData)
  }
  let idToDelete = "";
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showDeleteModal = (id) => {
    setIsDeleteMode(true);
    idToDelete = id;
    console.log(idToDelete)
  }

  const hideDeleteModal = () => {
    setIsDeleteMode(false);
    
  }

  return (
    <div>
      <div className={styles.movieList}>
        {movies.map((item) => (
          <MovieCard key={item.id} item={item} showDeleteModal={showDeleteModal} />
        ))}
      </div>
      <div className={styles.popups}>
      <DeleteModal isDeleteMode = {isDeleteMode} showDeleteModal={showDeleteModal} hideDeleteModal ={hideDeleteModal}></DeleteModal>
      <DeleteToast></DeleteToast>
      </div>
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
