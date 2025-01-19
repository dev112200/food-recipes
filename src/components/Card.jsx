import React from "react";
import styles from "./Card.module.css";
import {NavLink} from 'react-router-dom'
export default function Card({ mealArrayobj }) {
  console.log(mealArrayobj);
  return (
    <>
      {!mealArrayobj
        ? null
        : mealArrayobj.map((currentitem, index) => {
            return (
              <div key={index} className={styles.card}>
                <img src={currentitem.strMealThumb} alt="foodimg" />
                <h3>{currentitem.strMeal}</h3>
                <NavLink to={`/${currentitem.idMeal}`}><button>Recipe</button></NavLink>
              </div>
            );
          })}
    </>
  );
}
