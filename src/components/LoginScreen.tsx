import { useAuth } from "@/contexts/AuthContext";

export const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-4">Please Login</h1>
      <button
        className="px-8 py-4 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transform transition-all duration-200 ease-in-out"
        onClick={signInWithGoogle}
      >
        Google Login (only authorized users)
      </button>
    </div>
  );
};
