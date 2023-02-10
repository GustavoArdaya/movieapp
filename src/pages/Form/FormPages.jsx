import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import movieService from '../../apiService/movieService'
import styles from './formPages.module.css'

const initMovie = {
  name: 'defoult name',
  img: 'https://pharmamex.com/images/default.png',
  isFavorite: false,
}

export default function FormPages() {
  const [newMovie, setNewMovie] = useState({ initMovie })
  const navigator = useNavigate()

  const handleOnChange = (e) => {
    const nameMovie = e.target.nameMovie
    const value = e.target.value
    const temp = (newMovie[nameMovie] = value)
    setNewMovie({ ...newMovie, temp })
    console.log(newMovie)
  }

  const handleTitleOnChange = (e) => {
    console.log(e.target.name)
    const temp = { ...newMovie, title: e.target.value }
    setNewMovie(temp)
  }

  const handleImgOnChange = (e) => {
    console.log(e.target.value)
    const temp = { ...newMovie, img: e.target.value }
    setNewMovie(temp)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await movieService.create(newMovie)
    navigator('/')
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formImgContainer}>
          <img className={styles.formImg} src={newMovie.img} alt="movie" />
        </div>
        <section className={styles.textInputsContainer}>
          <input
            value={newMovie.name}
            onChange={handleTitleOnChange}
            className={styles.nameInput}
            type="text"
            name="title"
            placeholder="movie name"
          />

          <textarea
            value={newMovie.img}
            onChange={handleImgOnChange}
            className={styles.urlInput}
            type="textarea"
            name="img"
            placeholder="introduce url"
          />

          <button className={styles.submitButton} type="submit">
            Crear
          </button>
        </section>
      </form>
    </div>
  )
}
