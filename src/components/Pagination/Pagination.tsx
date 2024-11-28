import styles from "./Pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: number[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push(0);
      for (
        let i = Math.max(2, currentPage - 3);
        i <= Math.min(currentPage + 3, totalPages - 1);
        i++
      ) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 3) pageNumbers.push(0);
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((page, index) => (
        <span key={index}>
          {page === 0 ? (
            <span>...</span>
          ) : (
            <button
              onClick={() => onPageChange(page)}
              className={currentPage === page ? styles.active : ""}
            >
              {page}
            </button>
          )}
        </span>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};
