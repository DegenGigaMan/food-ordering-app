import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import Cart from "../Cart/Cart";
const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  }
  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButton onClick={showModalHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      {showModal && <Cart onClick={closeModalHandler}/>}
      
    </React.Fragment>
  );
};

export default Header;
