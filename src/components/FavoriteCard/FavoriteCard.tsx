import { Link } from "react-router-dom";
import { Meal } from "../../types/Meal";
import styles from "./FavoriteCard.module.scss";

type FavoriteCardProps = {
  meal: Meal;
  onRemove: (idMeal: string) => void;
};

export const FavoriteCard: React.FC<FavoriteCardProps> = ({
  meal,
  onRemove,
}) => {
  const handleRemoveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onRemove(meal.idMeal);
  };
  return (
    <Link to={`/recipe/${meal.idMeal}`} className={styles.favoriteCard}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <button onClick={handleRemoveClick}>Delete</button>
    </Link>
  );
};
