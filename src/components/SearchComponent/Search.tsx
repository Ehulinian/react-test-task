import { FC } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onSearchChange: (term: string) => void;
}

export const Search: FC<SearchProps> = ({ onSearchChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search meals"
        onChange={handleChange}
      />
    </div>
  );
};
