import { useState, useContext, useRef } from "react";
import { lintCode } from "../lib/fetch";
import { LintContext } from "@/contexts/LintContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeEditor = ({
  code,
  setCode,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => textareaRef.current?.focus()}
      onClick={() => textareaRef.current?.focus()}
      className="relative flex bg-[#282a36] w-11/12 mr-auto ml-auto rounded-md"
    >
      <textarea
        className="absolute inset-0 resize-none bg-transparent p-2 font-mono text-transparent caret-white outline-none"
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <SyntaxHighlighter
        language="latex"
        style={vscDarkPlus}
        showLineNumbers
        lineNumberStyle={{ minWidth: "40px" }}
        wrapLines
        lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        codeTagProps={{
          contentEditable: true,
          suppressContentEditableWarning: true,
        }}
        customStyle={{
          flex: "1",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export const LaTeXForm = () => {
  const { loading, setLoading } = useContext(LintContext);
  const { lang } = useContext(LintContext);
  const { setResult } = useContext(LintContext);
  const initialCode = `\\begin{document}\n  サンプルテキストはサンプルは素晴らしい。。\n\\end{document}`;
  const [code, setCode] = useState(initialCode);

  const handleClick = async () => {
    setLoading(true);
    const res = await lintCode(code, lang);
    setResult(res);
    setLoading(false);
  };

  return (
    <>
      <CodeEditor code={code} setCode={setCode} />
      <div className="flex flex-col justify-center items-center">
        <button
          id="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-1/2"
          onClick={handleClick}
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </>
  );
};
