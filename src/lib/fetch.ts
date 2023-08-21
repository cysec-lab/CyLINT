import { LintResults } from "@/types/lint";
import { isDebug } from "./firebase";

export const lintCode = async (code: string) => {
  const uri = isDebug
    ? `http://127.0.0.1:5001/cyseclint/asia-northeast1/lint`
    : `https://${window.location.hostname}/api/lint`;

  const res = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code }),
  });
  const json = await res.json();
  if (json.length === 0) {
    alert("No lint error found!☺️");
    return [];
  } else {
    console.log(json);
    // TODO: use zod
    return json as LintResults;
  }
};
