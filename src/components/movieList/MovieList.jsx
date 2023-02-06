import React, { useEffect, useState } from 'react';

import styles from './movieList.module.css';
import movieService from '../../apiService/movieService';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getAll().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <div className={styles.movieList}>
        {movies.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
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
