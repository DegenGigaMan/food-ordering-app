import Input from "../../../UI/Input/Input";
import styles from "./MealsItemForm.module.css";

const MealsItemForm = () => {
  return (
    <form onSubmit={() => {}} className={styles.form}>
      <Input />
      <button type="submit">+Add</button>
    </form>
  );
};

export default MealsItemForm;
