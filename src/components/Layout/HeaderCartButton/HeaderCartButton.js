import styles from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
       <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{cartContext.cartTotal}</span>
    </button>
  );
};

export default HeaderCartButton;