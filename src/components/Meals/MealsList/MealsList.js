import Card from "../../UI/Card/Card";
import MealsItem from "./MealsItem/MealsItem";
import styles from './MealsList.module.css';

const MealsList = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <MealsItem />
        <MealsItem />
        <MealsItem />
        <MealsItem />
      </Card>
    </section>
  );
};

export default MealsList;
