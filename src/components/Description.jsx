import React,{useState}from 'react'
import { useParams } from 'react-router-dom'
import styles from './Description.module.css'

export default function Description() {
  const [description, setdescription] = useState( );
  const {id}=useParams();
  const getddata = async ()=>{
    const fetching = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const response = await fetching.json()
    setdescription(response.meals[0])
  }
  getddata();
  return (
    <div className={styles.descriptionbox}>
      {!description ? (<h1>Loading......</h1>) :(
        <div className={styles.box}>
          <img className={styles.image} src={description.strMealThumb} alt="imgshow" />
           <h2 className={styles.mealname}>{description.strMeal} Recipe</h2>
           <p className={styles.mealdetail}>{description.strInstructions}</p>
        </div>
      ) 
        }
    </div>
  )
}
