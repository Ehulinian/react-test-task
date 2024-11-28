import { Meal } from "../types/Meal";
import { client } from "../utils/httpClient";

export const getMeals = async (
  search: string = ""
): Promise<{ meals: Meal[] }> => {
  const response = await client.get<{ meals: Meal[] }>(
    `/search.php?s=${search}`
  );
  return response;
};

export const getRecipeById = async (id: string): Promise<Meal> => {
  const response = await client.get<{ meals: Meal[] }>(`/lookup.php?i=${id}`);

  if (!response.meals || response.meals.length === 0) {
    throw new Error("Recipe not found");
  }

  return response.meals[0];
};
