import { useContext, useState, useEffect } from "react";
import { useMeals } from "../../hooks/useMeals";
import { Loader } from "../Loader";
import { MealCard } from "../MealCard";
import styles from "./MealsList.module.scss";
import { Pagination } from "../Pagination";
import { Search } from "../SearchComponent";
import { CategoryFilter } from "../CategoryFilter";
import { Category } from "../../types/Filter";
import { MealsContext } from "../../store/MealsContext";

export const MealsList = () => {
  const { page, setPage } = useContext(MealsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading } = useMeals();
  const [categoryFilter, setCategoryFilter] = useState<Category>(Category.All);

  const resultsPerPage = 10;

  const meals = data?.meals || [];

  const filteredMeals = meals
    .filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((meal) => {
      if (categoryFilter === Category.All) {
        return true;
      }

      return meal.strCategory === categoryFilter;
    });

  const totalMeals = filteredMeals.length;

  const totalPages = Math.ceil(totalMeals / resultsPerPage);

  const mealsToShow = filteredMeals.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  );

  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      setPage(totalPages);
    }
  }, [page, totalPages, setPage]);

  const handleCategoryChange = (category: Category) => {
    setCategoryFilter(category);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const isPaginationVisible = totalMeals > 0 && mealsToShow.length < totalMeals;

  return (
    <div className={styles.mealsList}>
      <h1>Meals</h1>

      <Search onSearchChange={setSearchTerm} />

      <CategoryFilter
        selectedCategory={categoryFilter}
        onCategoryChange={handleCategoryChange}
      />

      <div className={styles.mealsContainer}>
        {mealsToShow?.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>

      {isPaginationVisible && (
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
