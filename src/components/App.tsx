import {LaTeXForm} from "./LaTeXForm";
import {SubmitButton} from "./SubmitButton";
import {LintResults} from "./LintResults";

export const App = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4">
        <LaTeXForm />
        <SubmitButton />
        <LintResults />
      </div>
    </div>
  );
};