import { createContext } from "react";
import { Meal } from "../types/Meal";

export type State = {
  page: number;
  favorites: Meal[];
};

type MealsContextType = State & {
  setPage: (payload: number) => void;
  addToFavorites: (meal: Meal) => void;
  removeFromFavorites: (mealId: string) => void;
};

export const MealsContext = createContext<MealsContextType>({
  page: 1,
  favorites: [],
  setPage: () => {},
  addToFavorites: () => {},
  removeFromFavorites: () => {},
});
