import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles["spinner-wrapper"]}>
      <div className={styles.spinner}></div>
    </div>
  );
};
