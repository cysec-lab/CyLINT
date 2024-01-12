import { ReactNode, createContext, useContext, useCallback } from "react";
import { User, signInGoogleWithPopup, signOut } from "@/lib/firebase";
import { getUser, addUser } from "@/lib/user";
import { useAuthState } from "@/hooks/useAuthState";
import { LoginScreen } from "@/components/LoginScreen";
import { LoadingScreen } from "@/components/LoadingScreen";

type AuthContextValue = {
  user: User | null;
};

export const AuthContext = createContext<AuthContextValue>({ user: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState();

  if (loading) return <LoadingScreen />;
  if (!user) return <LoginScreen />;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  const signInWithGoogle = useCallback(async () => {
    try {
      const { user } = await signInGoogleWithPopup();
      const { isExist } = await getUser(user.uid);
      if (!isExist) await addUser(user);
    } catch (e) {
      console.error(e);
      await signOut();
    }
  }, []);

  return { user, signInWithGoogle, signOut };
};

export const useLogout = () => {
  const logout = () => {
    signOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};