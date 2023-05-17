import { useState } from "react";
import { lintCode } from "../lib/fetch";
export const LaTeXForm = () => {
  const initialCode = `\\begin{document}\nサンプルテキストはサンプルは素晴らしい。。\n\\end{document}`
  const [code, setCode] = useState(initialCode);
  const handleClick = () => lintCode(code);

  return (
    <>
      <textarea
        id="code"
        placeholder="Your LaTeX Code"
        className="p-4 rounded-md border-gray-300 border h-40 m-4"
        onKeyUp={(event: React.KeyboardEvent<HTMLTextAreaElement>) =>
          setCode(event.currentTarget.value)
        }
      >
        {initialCode}
      </textarea>
      <div className="flex flex-col justify-center items-center">
        <button
          id="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-1/2"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};
