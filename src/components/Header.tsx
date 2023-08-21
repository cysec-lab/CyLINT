import { useContext } from "react";
import { LintContext } from "@/contexts/LintContext";

export const Header = () => {
  const { lang, setLang } = useContext(LintContext);
  return (
    <div style={{ position: "fixed", top: 0, right: 0 }}>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={lang === "en"}
          onChange={() => setLang(lang === "en" ? "ja" : "en")}
          className="sr-only"
        />
        <span className="mr-[18px] text-sm font-medium text-black">lang:</span>
        <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              lang === "en" ? "bg-primary text-black" : "bg-blue-500 text-white"
            }`}
          >
            ja
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              lang === "ja" ? "bg-primary text-black" : "bg-blue-500 text-white"
            }`}
          >
            en
          </span>
        </div>
      </label>
    </div>
  );
};
