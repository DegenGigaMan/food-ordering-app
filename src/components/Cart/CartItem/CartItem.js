import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./CartItem.module.css";

const CartItem = (props) => {

  const Cart = useContext(CartContext);

  const addItem = () => {
    Cart.onAddItem(props.item.name);
  }

  const removeItem = () => {
    Cart.onRemoveItem(props.item.name);
  }
  
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.item.price.toFixed(2)}</span>
          <span className={styles.amount}>{props.item.amount}x</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeItem}>-</button>
        <button onClick={addItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
