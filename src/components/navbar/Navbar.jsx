import React from 'react'
import styles from './navbar.module.css'
import { CgMenuRound } from 'react-icons/cg'
import logo from '../../assets/Logo.png'

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.navLogoContainer}>
          <img className={styles.navLogo} src={logo} />
        </div>
        <h1 className={styles.navTitle}>MovieApp</h1>
        <CgMenuRound className={styles.navMenu} />
      </nav>
    </div>
  )
}
