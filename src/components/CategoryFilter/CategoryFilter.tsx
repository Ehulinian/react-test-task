import React from "react";
import styles from "./CategoryFilter.module.scss";
import { Category } from "../../types/Filter";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className={styles.filterContainer}>
      <label htmlFor="category-select" className={styles.selectName}>
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value as Category)}
        className={styles.categorySelect}
      >
        {Object.values(Category).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
