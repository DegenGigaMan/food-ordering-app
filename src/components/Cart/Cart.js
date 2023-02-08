import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const hasItems = cartContext.cartItems.length > 0;
  const totalAmount = `$${cartContext.orderTotal.toFixed(2)}`;
  
  const addItem = (item) => {
    cartContext.onAdd({...item, amount: 1 });
  };

  const removeItem = (id) => {
    cartContext.onRemove(id);
  };

  return (
    <Modal onClick={props.onClick}>
      <ul className={styles["cart-items"]}>
        {hasItems && cartContext.cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.id}
              onAdd={addItem.bind(null, cartItem)}
              onRemove={removeItem.bind(null, cartItem.id)}
              item={cartItem}
            />
          );
        })}
      </ul>

      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{totalAmount}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClick}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
