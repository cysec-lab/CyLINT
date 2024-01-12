import { ReactNode, createContext, useState } from "react";
import { LintResults } from "@/types/lint";

type LintContext = {
  loading: boolean;
  loadingTime?: number;
  setLoading: (loading: boolean, loadingTime?: number) => void;
  lang: "en" | "ja";
  setLang: (lang: "en" | "ja") => void;
  result: LintResults;
  setResult: (result: LintResults) => void;
};

const defaultContext: LintContext = {
  loading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoading: (loading: boolean, loadingTime?: number) => {},
  lang: "ja",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLang: (lang) => {},
  result: [] as LintResults,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResult: (result) => {},
};

export const LintContext = createContext<LintContext>(defaultContext);

export const LintProvider = ({ children }: { children: ReactNode }) => {
  const [loading, updateLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(undefined);
  const [result, setResult] = useState([] as LintResults);
  const [lang, setLang] = useState<"en" | "ja">("ja");
  const setLoading = (loading: boolean, loadingTime?: number) => {
    updateLoading(loading);
    setLoadingTime(loadingTime);
  };
  return (
    <LintContext.Provider
      value={{
        loading,
        loadingTime,
        setLoading,
        lang,
        setLang,
        result,
        setResult,
      }}
    >
      {children}
    </LintContext.Provider>
  );
};
