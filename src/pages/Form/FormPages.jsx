import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import movieService from '../../apiService/movieService';
import styles from './formPages.module.css';

const initMovie = {
  name: '',
  img: 'https://pharmamex.com/images/default.png',
  isFavorite: false,
};

export default function FormPages() {
  const [newMovie, setNewMovie] = useState(initMovie);
  const navigator = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    newMovie[name] = value;
    setNewMovie({ ...newMovie });
    console.log(newMovie);
  };

  const handleTitleOnChange = (e) => {
    console.log(e.target.name);
    const temp = { ...newMovie, name: e.target.value };
    setNewMovie(temp);
  };

  const handleImgOnChange = (e) => {
    console.log(e.target.value);
    const temp = { ...newMovie, img: e.target.value };
    setNewMovie(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await movieService.create(newMovie);
    navigator('/');
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formImgContainer}>
          <img className={styles.formImg} src={newMovie.img} alt='movie' />
        </div>
        <section className={styles.textInputsContainer}>
          <textarea
            value={newMovie.img}
            onChange={handleOnChange}
            className={styles.urlInput}
            type='textarea'
            name='img'
            placeholder='introduce url'
          />
          <input
            value={newMovie.name}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='name'
            placeholder='movie name'
          />

          <input
            value={newMovie.director}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='director'
            placeholder='director'
          />
          <input
            value={newMovie.year}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='year'
            placeholder='year'
          />

          <input
            value={newMovie.genre}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='genre'
            placeholder='genre'
          />
          <textarea
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            className={styles.urlInput}
            type='textarea'
            name='sinopsis'
            placeholder='sinopsis'
          />
          {/* <input
            value={newMovie.sinopsis}
            onChange={handleOnChange}
            className={styles.nameInput}
            type='text'
            name='sinopsis'
            placeholder='Sinopsis'
          /> */}

          <button className={styles.submitButton} type='submit'>
            Crear
          </button>
        </section>
      </form>
    </div>
  );
}
