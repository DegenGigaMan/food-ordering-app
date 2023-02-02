import styles from './HeaderCartButton.module.css';
import CartIcon from '../../Cart/CartIcon/CartIcon';

const HeaderCartButton = () => {
  return (
    <button className={styles.button} onClick={()=>{}}>
      <span className={styles.icon}>
       <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>6</span>
    </button>
  );
};

export default HeaderCartButton;