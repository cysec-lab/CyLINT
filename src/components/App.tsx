import { LaTeXForm } from "./LaTeXForm";
import { LintResults } from "./LintResults";

export const App = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <LaTeXForm />
        <LintResults />
      </div>
    </div>
  );
};
