import styles from "./LoadingScreen.module.css";

export const AuthLoadingScreen = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className={`${styles.spinner} mb-4`} />
    <div className="text-lg">{`Loading...`}</div>
  </div>
);

export const SubmitLoadingScreen = (loadingTime?: number) => {
  const loadingText = loadingTime
    ? `Loading... (about ${loadingTime}s)`
    : `Loading...`;
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 fixed top-0 left-0 right-0 bottom-0 z-50 w-screen h-screen">
      <div className={`${styles.spinner} mr-4`} />
      <div className="text-lg font-bold">{loadingText}</div>
    </div>
  );
};
