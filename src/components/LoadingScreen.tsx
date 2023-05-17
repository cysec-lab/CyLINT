import styles from "./LoadingScreen.module.css";

export const LoadingScreen = () => (
  <div className={`${styles.container} ${styles.normal}`}>
    <div className={styles.spinner} />
    <div className={styles.text}>Loading...</div>
  </div>
);

export const LoadingScreenClear = () => (
  <div className={`${styles.container} ${styles.clear}`}>
    <div className={styles.spinner} />
    <div className={styles.text}>Loading...</div>
  </div>
);