import { useParams } from "react-router-dom";
import { useMeal } from "../../hooks/useMeals";
import styles from "./RecipeDetail.module.scss";
import { IngredientsList } from "../../components/IngridientList";
import { Loader } from "../../components/Loader";
import { Container } from "../../components/Container";

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useMeal(id as string);

  if (isLoading) {
    return <Loader />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const meal = data;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    ingredient: meal?.[`strIngredient${i + 1}` as keyof typeof meal] || null,
    measure: meal?.[`strMeasure${i + 1}` as keyof typeof meal] || null,
  })).filter((item) => item.ingredient !== null);

  return (
    <Container>
      <div className={styles.header}>
        <h1>{meal?.strMeal}</h1>
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      </div>

      <div className={styles.info}>
        <p>
          <strong>Category:</strong> {meal?.strCategory}
        </p>
        <p>
          <strong>Area:</strong> {meal?.strArea}
        </p>
        <p>
          <strong>Tags:</strong> {meal?.strTags || "No tags available"}
        </p>
        <p>
          <strong>Instructions:</strong> {meal?.strInstructions}
        </p>
        <p>
          <strong>Video:</strong>{" "}
          {meal?.strYoutube ? (
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          ) : (
            "No video available"
          )}
        </p>
      </div>

      <IngredientsList ingredients={ingredients} />
    </Container>
  );
};
