import { LaTeXForm } from "./LaTeXForm";
import { LintResults } from "./LintResults";
import { LintContext } from "@/contexts/LintContext";
import { LoadingScreenClear } from "./LoadingScreen";
import { useContext } from "react";

export const App = () => {
  const { loading } = useContext(LintContext)
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <LaTeXForm />
        {loading && LoadingScreenClear()}
        <LintResults />
      </div>
    </div>
  );
};
