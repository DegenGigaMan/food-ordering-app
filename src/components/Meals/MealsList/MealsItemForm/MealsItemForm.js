import { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import styles from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValid, setIsValid] = useState(true);
  //start working here
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setIsValid(false);
      return;
    }
    //forward amount bc context onAdd() needs item and amount data
    props.onAddItem(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+Add</button>
      {!isValid && <p>Please enter valid number (1-5).</p>}
    </form>
  );
};

export default MealsItemForm;
