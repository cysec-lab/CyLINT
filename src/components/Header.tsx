import { useContext } from "react";
import { LintContext } from "@/contexts/LintContext";
import { useLogout } from "@/contexts/AuthContext";

export const Header = () => {
  const { lang, setLang } = useContext(LintContext);
  const { logout } = useLogout();
  return (
    <div style={{ position: "fixed", top: 0, right: 0, zIndex: 1 }}>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center bg-white rounded p-1">
        <input
          type="checkbox"
          checked={lang === "en"}
          onChange={() => setLang(lang === "en" ? "ja" : "en")}
          className="sr-only"
        />
        <span className="mr-[12px] text-sm font-medium text-black">lang:</span>
        <div className="shadow-card flex items-center justify-center rounded-md bg-white border-blue-500 border-2">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              lang === "en"
                ? "bg-primary text-black hover:bg-blue-200"
                : "bg-blue-500 text-white"
            }`}
          >
            ja
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              lang === "ja"
                ? "bg-primary text-black hover:bg-blue-200"
                : "bg-blue-500 text-white"
            }`}
          >
            en
          </span>
        </div>
      </label>
      <label className="relative inline-flex select-none cursor-pointer bg-white rounded p-1">
        <div className="rounded-md bg-white border-blue-500 border-2">
          <input
            type="button"
            value="logout"
            onClick={logout}
            className="h-9 w-18 justify-center text-black bg-primary rounded p-1 hover:bg-blue-200"
          />
        </div>
      </label>
    </div>
  );
};
