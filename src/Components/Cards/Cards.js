import React from 'react';
import styles from "./Cards.module.css";

const Cards = ({ title, text, image }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img src={image} draggable={false}/>
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Cards;
