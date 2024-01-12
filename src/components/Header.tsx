import { useContext } from "react";
import { LintContext } from "@/contexts/LintContext";
import { useLogout } from "@/contexts/AuthContext";

export const Header = () => {
  const { lang, setLang } = useContext(LintContext);
  const { logout } = useLogout();
  return (
    <div className="w-screen fixed top-0 z-10 bg-white h-14">
      <div className="absolute left-0 text-3xl font-bold p-2 bg-white rounded">
        ✍CyLint
      </div>
      <div className="absolute right-0">
        <label className="relative inline-flex cursor-pointer select-none items-center bg-white rounded p-1">
          <input
            type="checkbox"
            checked={lang === "en"}
            onChange={() => setLang(lang === "en" ? "ja" : "en")}
            className="sr-only"
          />
          <span className="mr-[12px] text-sm font-medium text-black">
            lang:
          </span>
          <div className="shadow-card flex items-center justify-center rounded-md bg-white border-blue-500 border-2">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded ${
                lang === "en"
                  ? "bg-primary text-black hover:bg-blue-200"
                  : "bg-blue-500 text-white"
              }`}
            >
              🇯🇵
            </span>
            <span
              className={`flex h-9 w-9 items-center justify-center rounded ${
                lang === "ja"
                  ? "bg-primary text-black hover:bg-blue-200"
                  : "bg-blue-500 text-white"
              }`}
            >
              🇬🇧
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
    </div>
  );
};
