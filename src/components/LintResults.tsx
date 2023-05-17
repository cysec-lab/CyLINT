
import { LintResult } from "@/types/lint";
import { useContext } from "react";
import { LintContext } from "@/contexts/LintContext";

export const LintResults = () => {
  const { result } = useContext(LintContext)
  const removeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    const parent = target.parentElement?.parentElement;
    if (parent) {
      parent.remove();
    }
  };
  const makeURLCmp = (url?: string) => {
    if (!url) return <></>;
    else {
      const ruleId = url.split("/")[1];
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${ruleId}</a>`;
    }
  };
  return (
    <table className="table-auto border border-collapse m-4">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-blue-200">line</th>
          <th className="px-4 py-2 bg-blue-200">message</th>
          <th className="px-4 py-2 bg-blue-200">url</th>
          <th className="px-4 py-2 bg-blue-200">Action</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {result.map((lint: LintResult, id) => (
          <tr key={id}>
            <td className="border px-4 py-2">{`${lint.loc.start.line}-${lint.loc.end.line}`}</td>
            <td className="border px-4 py-2">{lint.message}</td>
            <td className="border px-4 py-2">{makeURLCmp(lint.url)}</td>
            <td className="border px-4 py-2">
              <a type="button" onClick={(event) => removeHandler(event)}>
                ×
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
