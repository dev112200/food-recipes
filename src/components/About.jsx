import React from "react";
import styles from "./About.module.css";
export default function About() {
  return (
    <div className={styles.aboutbox}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>About Our Food Recipes Project</h1>
        <p className={styles.description}>
          Welcome to our Food Recipes project! Here, we share a variety of
          delicious and easy-to-follow recipes for all kinds of occasions.
          Whether you're a seasoned chef or a beginner, you'll find recipes to
          suit your taste and skill level.
        </p>
        <p className={styles.description}>
          Our goal is to bring people together through the joy of cooking. We
          believe that food is more than just fuel—it's a way to connect with
          loved ones, explore new cultures, and create lasting memories.
        </p>
        <p className={styles.description}>
          Explore our collection of recipes, ranging from quick weeknight
          dinners to indulgent desserts. We strive to provide clear
          instructions, helpful tips, and nutritional information so that anyone
          can cook with confidence.
        </p>
        <p className={styles.footer}>
          Happy cooking, and we hope our recipes inspire you in the kitchen!
        </p>
      </div>
    </div>
  );
}
