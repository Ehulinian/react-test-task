import React from "react";
import styles from "./IngridientList.module.scss";

interface Ingredient {
  ingredient: string | null;
  measure: string | null;
}

export const IngredientsList: React.FC<{ ingredients: Ingredient[] }> = ({
  ingredients,
}) => {
  return (
    <div className={styles.ingredients}>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map(({ ingredient, measure }, index) => (
          <li key={index}>
            {measure} {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
