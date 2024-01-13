import { useState, useContext, useEffect } from "react";
import { lintCode } from "../lib/fetch";
import { LintContext } from "@/contexts/LintContext";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-latex";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeEditor = ({
  code,
  setCode,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mr-auto ml-auto">
      <AceEditor
        mode="latex"
        theme="monokai"
        placeholder="Write LaTeX code here"
        onChange={(code) => setCode(code)}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        width="90vw"
        height="40vh"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        className="rounded"
      />
    </div>
  );
};

export const LaTeXForm = () => {
  const { loading, setLoading } = useContext(LintContext);
  const { lang } = useContext(LintContext);
  const { setResult } = useContext(LintContext);
  const initialJaCode = `\\begin{document}\n  サンプルテキストはサンプルは素晴らしい。。\n\\end{document}`;
  const initialEnCode = `\\begin{document}\n  sample text is sample is awesome..\n\\end{document}`;
  const [code, setCode] = useState(initialJaCode);

  useEffect(() => {
    if (lang === "ja") {
      if (code === initialEnCode) {
        setCode(initialJaCode);
      }
    }
    if (lang === "en") {
      if (code === initialJaCode) {
        setCode(initialEnCode);
      }
    }
  }, [lang]);

  const handleClick = async () => {
    setLoading(true, 15);
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
