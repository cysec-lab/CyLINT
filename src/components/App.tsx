import { useContext } from "react";
import { LaTeXForm } from "./LaTeXForm";
import { LintResults } from "./LintResults";
import { LintContext } from "@/contexts/LintContext";
import { LoadingScreenClear } from "./LoadingScreen";
import { Header } from "./Header";

export const App = () => {
  const { loading } = useContext(LintContext);
  return (
    <div>
      <Header />
      {loading && LoadingScreenClear()}
      <div className="flex flex-col space-y-4 mt-8">
        <LaTeXForm />
        <LintResults />
      </div>
    </div>
  );
};
