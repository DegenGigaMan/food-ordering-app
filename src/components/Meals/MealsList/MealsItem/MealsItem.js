import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import MealsItemForm from "../MealsItemForm/MealsItemForm";
import styles from "./MealsItem.module.css";

const MealsItem = (props) => {
  const cartCntx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCntx.onAdd({
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddItem={addToCart} />
      </div>
    </li>
  );
};

export default MealsItem;
