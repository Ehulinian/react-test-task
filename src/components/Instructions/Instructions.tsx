import { Meal } from "../../types/Meal";
import styles from "./Instructions.module.scss";

type InstructionsProps = {
  meals: Meal[];
};

export const Instructions: React.FC<InstructionsProps> = ({ meals }) => {
  return (
    <div className={styles.instructions}>
      {meals.map((meal, index) => (
        <div key={index} className={styles.instructions__meal}>
          <h3 className={styles.instructions__title}>{meal.strMeal}</h3>
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};
