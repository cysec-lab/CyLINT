import { useState, useContext } from "react";
import { lintCode } from "../lib/fetch";
import { LintContext } from "@/contexts/LintContext";

export const LaTeXForm = () => {
  const { loading, setLoading } = useContext(LintContext);
  const { result, setResult } = useContext(LintContext);
  const initialCode = `\\begin{document}\nサンプルテキストはサンプルは素晴らしい。。\n\\end{document}`;
  const [code, setCode] = useState(initialCode);

  const handleClick = async () => {
    setLoading(true);
    const res = await lintCode(code);
    setResult(res);
    setLoading(false);
  };

  return (
    <>
      <textarea
        id="code"
        placeholder="Your LaTeX Code"
        className="p-4 rounded-md border-gray-300 border h-40 m-4"
        onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) =>
          setCode(event.currentTarget.value)
        }
        defaultValue={initialCode}
      ></textarea>
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
