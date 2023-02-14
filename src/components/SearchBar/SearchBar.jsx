import React from 'react'
import styles from './searchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
        <input className={styles.searchInput} type="text"  />
        <button className={styles.searchButton}>Buscar</button> 
    </div>
  )
}
