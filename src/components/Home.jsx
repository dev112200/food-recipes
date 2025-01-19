import React from 'react'
import styles from './Home.module.css'
import foodImage from '/src/images/foodimage.png'
import About from './About'
import Contact from './Contact'
export default function Home() {
  return (
    <>
    <div className={styles.homePage}>
      <div className={styles.heroSection}>
        <img 
          src={foodImage} 
          alt="Delicious Food" 
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Welcome to Our Recipe World!</h1>
          <p className={styles.heroDescription}>
            Discover delicious, easy-to-make recipes from around the world. Whether you are a seasoned chef or a beginner, you'll find something to excite your taste buds!
          </p>
        </div>
      </div>
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Start Exploring</h2>
        <p className={styles.ctaDescription}>
          Looking for quick meals? Healthy options? Or maybe some exotic flavors? Explore our recipe collections now and start cooking!
        </p>
        <button className={styles.ctaButton}>Explore Recipes</button>
      </div>
    </div>
    <About/>
    <Contact/>
    </>
  )
}
