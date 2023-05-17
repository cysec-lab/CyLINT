import styles from "./LoadingScreen.module.css";

export const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className={`${styles.spinner} mb-4`} />
    <div className="text-lg">{`Loading...`}</div>
  </div>
);

export const LoadingScreenClear = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100 absolute top-0 left-0 right-0 bottom-0">
    <div className={`${styles.spinner} mr-4`} />
    <div className="text-lg font-bold">{`Loading...`}</div>
  </div>
);