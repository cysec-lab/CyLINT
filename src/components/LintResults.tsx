import { LintResult } from "@/types/lint";
import { useContext } from "react";
import { LintContext } from "@/contexts/LintContext";

export const LintResults = () => {
  const { result } = useContext(LintContext);
  const removeHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLAnchorElement;
    const parent = target.parentElement?.parentElement;
    if (parent) {
      parent.remove();
    }
  };
  const makeURLCmp = (url?: string) => {
    if (!url) return <>{url}</>;
    else {
      const ruleId = url.split("/").pop();
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-700 cursor-pointer hover:underline">
          {ruleId}
        </a>
      );
    }
  };
  return (
    <table className="table-auto border border-collapse m-4">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-blue-200">Line</th>
          <th className="px-4 py-2 bg-blue-200">Message</th>
          <th className="px-4 py-2 bg-blue-200">URL</th>
          <th className="px-4 py-2 bg-blue-200">Checked</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {result.map((lint: LintResult, id) => (
          <tr key={id}>
            <td className="border px-4 py-2">{`${lint.loc.start.line}-${lint.loc.end.line}`}</td>
            <td className="border px-4 py-2">{lint.message}</td>
            <td className="border px-4 py-2">{makeURLCmp(lint.url)}</td>
            <td className="border px-4 py-2 text-center">
              <button
                className="px-3 py-1 bg-green-200 hover:bg-green-300 rounded-md cursor-pointer"
                onClick={(event) => removeHandler(event)}
              >
                ✔️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
