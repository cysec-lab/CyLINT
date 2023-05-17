import styles from "./LoadingScreen.module.css";

export const LoadingScreen = () => (
  <div className={styles.container}>
    <div className={styles.spinner} />
    <div className={styles.text}>Loading...</div>
  </div>
);