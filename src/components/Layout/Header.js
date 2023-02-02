import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </React.Fragment>
  );
};

export default Header;
