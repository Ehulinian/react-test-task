import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import styles from "./MealCard.module.scss";
import { useContext } from "react";
import { MealsContext } from "../../store/MealsContext";

type MealCardProps = {
  meal: Meal;
};

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const { addToFavorites, removeFromFavorites, favorites } =
    useContext(MealsContext);

  const handleAddToFavorites = () => {
    addToFavorites(meal);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(meal.idMeal);
  };

  const isFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal.idMeal
  );

  return (
    <div className={styles.mealCard}>
      <Link to={`/recipe/${meal.idMeal}`} className={styles.mealCardLink}>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className={styles.mealImage}
        />
        <div className={styles.mealInfo}>
          <h2 className={styles.mealTitle}>{meal.strMeal}</h2>
          <p className={styles.mealCategory}>Category: {meal.strCategory}</p>
          <p className={styles.mealOrigin}>Origin: {meal.strArea}</p>
        </div>
      </Link>

      <button
        className={styles.favoriteButton}
        onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};
