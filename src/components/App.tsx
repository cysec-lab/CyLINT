import { useContext } from "react";
import { LaTeXForm } from "./LaTeXForm";
import { LintResults } from "./LintResults";
import { LintContext } from "@/contexts/LintContext";
import { SubmitLoadingScreen } from "./LoadingScreen";
import { Header } from "./Header";

export const App = () => {
  const { loading, loadingTime } = useContext(LintContext);
  return (
    <div>
      <Header />
      {loading && SubmitLoadingScreen(loadingTime)}
      <div className="flex flex-col space-y-4 mt-16">
        <LaTeXForm />
        <LintResults />
      </div>
    </div>
  );
};
