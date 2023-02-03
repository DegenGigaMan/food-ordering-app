import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  return (
    <Modal>
      <ul className={styles["cart-items"]}>
        <CartItem />
        <CartItem />
      </ul>

      <div className={styles.total}>
        <div>Total Amount</div>
        <div>$80.99</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
