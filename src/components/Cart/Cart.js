import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <Modal onClick={props.onClick}>
      <ul className={styles["cart-items"]}>
        {cartContext.cartList.map((cartItem) => {
          return (
            <CartItem key={cartItem.id} item={cartItem}/>
          );
        })}
      </ul>

      <div className={styles.total}>
        <div>Total Amount</div>
        <div>${cartContext.orderTotal}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClick}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
