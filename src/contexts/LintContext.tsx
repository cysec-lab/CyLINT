import { ReactNode, createContext, useState } from "react";
import { LintResults } from "@/types/lint";

type LintContext = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  result: LintResults;
  setResult: (result: LintResults) => void;
};

const defaultContext: LintContext = {
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: (loading) => {},
  result: [] as LintResults,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResult: (result) => {},
};

export const LintContext = createContext<LintContext>(defaultContext);

export const LintProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([] as LintResults);
  return <LintContext.Provider value={{loading, setLoading, result, setResult}}>{children}</LintContext.Provider>;
};
