import { isDebug } from "./firebase";
import aspida from "@aspida/fetch";
import api from "@/api/$api";
import type { LintResults } from "@/api/@types";

export const lintCode = async (code: string, lang: "en" | "ja") => {
  const uri = isDebug
    ? `http://127.0.0.1:5001/cyseclint/asia-northeast1/lint`
    : `https://${window.location.hostname}/api/lint`;

  const fetchConfig = {
    baseURL: uri,
    throwHttpErrors: true,
  };
  const client = api(aspida((...args) => fetch(...args), fetchConfig));

  const response = await client.lint.post({ body: { code, lang } });
  const results = response.body;
  if (results.length === 0) {
    const res: LintResults = [
      {
        loc: {
          start: { line: 1, column: 1 },
          end: { line: 1, column: 1 },
        },
        message: "No errors! ☺️",
      },
    ];
    return res;
  } else {
    console.log(results);
    return results;
  }
};
