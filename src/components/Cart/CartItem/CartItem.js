import styles from "./CartItem.module.css";

const CartItem = () => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>Sushi</h2>
        <div className={styles.summary}>
          <span className={styles.price}>$22.99</span>
          <span className={styles.amount}>2x</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
