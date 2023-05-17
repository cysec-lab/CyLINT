import { useAuth } from "@/contexts/AuthContext";
import styles from "./LoginScreen.module.css";

export const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Please Login</h1>
      <button className={styles.button} onClick={signInWithGoogle}>
        Google Login (only Cysec-lab Students)
      </button>
    </div>
  );
};