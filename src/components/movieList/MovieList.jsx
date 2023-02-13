import React, { useEffect, useState } from 'react';

import styles from './movieList.module.css';
import movieService from '../../apiService/movieService';
import MovieCard from '../MovieCard/MovieCard';
import DeleteToast from '../DeleteToast/DeleteToast';
import DeleteModal from '../DeleteModal/DeleteModal';
import film_spinner from '../../assets/film_spinner.png';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    movieService.getAll().then((data) => {
      setMovies(data);
      setIsLoading(false);
    });
  }, []);

  const deleteById = async (idToDelete) => {
    await movieService.deleteById(idToDelete);
    let newData = movies.filter((movie) => movie.id !== idToDelete);
    setMovies(newData);
  };
  let idToDelete = '';
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const showDeleteModal = (id) => {
    setIsDeleteMode(true);
    idToDelete = id;
    console.log(idToDelete);
  };

  const hideDeleteModal = () => {
    setIsDeleteMode(false);
  };

  return (
    <div>
      <div className={styles.spinnerContainer}>
        {isLoading ? (
          <div>
            <img className={styles.spinner} src={film_spinner}></img>
            <p className={styles.loadingText}>Cargando...</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.movieList}>
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            item={item}
            showDeleteModal={showDeleteModal}
            deleteById={deleteById}
          />
        ))}
      </div>
      <div className={styles.popups}>
        {/* <DeleteModal
          isDeleteMode={isDeleteMode}
          showDeleteModal={showDeleteModal}
          hideDeleteModal={hideDeleteModal}
        ></DeleteModal>
        <DeleteToast></DeleteToast> */}
      </div>
    </div>
  );
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
