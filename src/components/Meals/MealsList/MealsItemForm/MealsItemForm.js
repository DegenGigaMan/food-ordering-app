import { useContext, useState } from "react";
import CartContext from "../../../../store/cart-context";
import Input from "../../../UI/Input/Input";
import styles from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const [amountInput, setAmountInput] = useState(1);

  const changeHandler = (props) => {
    setAmountInput(props.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    cartContext.onAdd(+amountInput, props.meal);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input onChange={changeHandler} value={amountInput}/>
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealsItemForm;
