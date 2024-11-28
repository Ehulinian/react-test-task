import { Meal } from "../../types/Meal";

export const combineIngredients = (favorites: Meal[]) => {
  const allIngredients: string[] = [];

  favorites.forEach((meal) => {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof Meal];
      const measure = meal[`strMeasure${i}` as keyof Meal];
      if (ingredient && ingredient.trim() !== "") {
        allIngredients.push(`${ingredient} (${measure})`);
      }
    }
  });

  return [...new Set(allIngredients)].sort();
};
