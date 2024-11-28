import { useQuery } from "@tanstack/react-query";
import { Meal } from "../types/Meal";
import { getMeals, getRecipeById } from "../api/meals";

export const useMeals = () => {
  return useQuery<{ meals: Meal[] }, Error>({
    queryKey: ["meals"],
    queryFn: () => getMeals(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useMeal = (id: string) => {
  return useQuery<Meal, Error>({
    queryKey: ["meal", id],
    queryFn: () => getRecipeById(id),
    enabled: !!id,
  });
};
