import { useContext, useState } from "react";
import CartContext from "../../../../store/cart-context";
import Input from "../../../UI/Input/Input";
import styles from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  const cartContext = useContext(CartContext);
  const [amountInput, setAmountInput] = useState(1);

  const changeHandler = (props) => {
    if (props.target.value < 0) {
      return;
    }
    setAmountInput(props.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    cartContext.onAddToCart(+amountInput, props.meal);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        label="Amount"
        onChange={changeHandler}
        value={amountInput}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: "1",
        }}
      />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealsItemForm;
