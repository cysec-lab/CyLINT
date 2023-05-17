export const LaTeXForm = () => (
  <textarea
    id="code"
    placeholder="Your LaTeX Code"
    className="p-4 rounded-md border-gray-300 border h-40 m-4"
  >
    {`\begin{document}
  サンプルテキストはサンプルは素晴らしい。。
  \end{document}`}
  </textarea>
);
