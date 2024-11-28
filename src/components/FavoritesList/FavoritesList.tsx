import { useContext } from "react";
import { MealsContext } from "../../store/MealsContext";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";
import styles from "./FavoritesList.module.scss";
import { Meal } from "../../types/Meal";
import { Instructions } from "../Instructions";
import { combineIngredients } from "../helper/combine";

export const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useContext(MealsContext);

  const ingredientsList = combineIngredients(favorites);

  if (favorites.length === 0) {
    return <div className={styles.noMeals}>There are no meals</div>;
  }

  return (
    <div className={styles.favoritesList}>
      <h1 className={styles.favoritesList__header}>Favorite recipes</h1>

      <div className={styles.favoritesList__favorites}>
        {favorites.map((meal: Meal) => (
          <FavoriteCard
            key={meal.idMeal}
            meal={meal}
            onRemove={removeFromFavorites}
          />
        ))}
      </div>

      {favorites.length > 0 && (
        <div className={styles.favoritesList__summary}>
          <h2 className={styles.favoritesList__summary__title}>
            Ingredients List
          </h2>
          <ul className={styles.favoritesList__summary__ingredients}>
            {ingredientsList.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className={styles.favoritesList__summary__title}>Instructions</h2>
          <div className={styles.favoritesList__summary__instructions}>
            <Instructions meals={favorites} />
          </div>
        </div>
      )}
    </div>
  );
};
