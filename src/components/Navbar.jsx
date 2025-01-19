import React from 'react'
import styles from './Navbar.module.css'
import logo from '/src/images/logo.png'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link  to="/recipes" className={styles.navLink}>Recipes</Link>
        </li>
        <li className={styles.navItem}>
          <Link  to="/about" className={styles.navLink}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link  to="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
