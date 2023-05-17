import { ReactNode, createContext, useContext } from "react";
import { LintResult } from "@/types/lint";

type LintContextValue = {
  loading: boolean;
  result: LintResult;
};

export const LintContext = createContext<LintContextValue>({
  loading: false,
  result: []
});

export const LintProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LintContext.Provider value={{ loading: false, result: [] }}>
      {children}
    </LintContext.Provider>
  );
};

export const useUsers = () => {
  const { loading, result } = useContext(LintContext);
  return { loading, result };
};
