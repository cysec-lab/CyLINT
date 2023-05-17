export const LintResults = () => (
  <table className="table-auto border border-collapse m-4">
    <thead>
      <tr>
        <th className="px-4 py-2 bg-blue-200">line</th>
        <th className="px-4 py-2 bg-blue-200">message</th>
        <th className="px-4 py-2 bg-blue-200">url</th>
      </tr>
    </thead>
    <tbody id="table-body"></tbody>
  </table>
);
