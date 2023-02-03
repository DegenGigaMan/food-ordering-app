import MealsItemForm from "../MealsItemForm/MealsItemForm";
import styles from "./MealsItem.module.css";

const MealsItem = (props) => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={styles.description}>{props.meal.description}</div>
        <div className={styles.price}>${props.meal.price}</div>
      </div>
      <div>
        <MealsItemForm meal={props.meal}/>
      </div>
    </li>
  );
};

export default MealsItem;
