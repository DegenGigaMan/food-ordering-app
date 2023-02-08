import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const [bumpButton, setBumpButton] = useState(false);

  const { cartItems } = cartContext;
  
  const totalInCart = cartItems.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  const stylesBtn = `${styles.button} ${bumpButton ? styles.bump : ''}`;

  useEffect(() => {
    if(cartItems.length === 0){
      return;
    }
    setBumpButton(true);

    const timer = setTimeout(() => {
      setBumpButton(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };

  }, [cartItems])
  return (
    <button className={stylesBtn} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
