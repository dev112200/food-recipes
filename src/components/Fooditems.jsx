import React, { useState } from "react";
import Card from "./Card";
import styles from "./Fooditems.module.css";

export default function Fooditems() {
  const styling = {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: "2vw",
    paddingBottom: "2vw",
    gap: "1.5vw",
  };
  const [searchItem, setsearchItem] = useState();
  const [Mealdata, setMealdata] = useState();
  const handleInpvalue = (event) => {
    setsearchItem(event.target.value);
    console.log(event.target.value);
  };
  async function fetchMeal() {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMealdata(data.meals);
    } catch (error) {
      console.error("Failed to fetch meal data:", error);
    }
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <h2 className={styles.title}>Search for Recipes</h2>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleInpvalue}
            className={styles.input}
          />
          <button type="submit" onClick={fetchMeal} className={styles.button}>
            Search
          </button>
        </div>
      </div>

      <div className="showcards" style={styling}>
        <Card mealArrayobj={Mealdata} />
      </div>
    </div>
  );
}
