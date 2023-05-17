import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import { UsersProvider } from "./contexts/UsersContext";
import { LintProvider } from "./contexts/LintContext";
import "@/lib/firebase";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <UsersProvider>
        <LintProvider>
          <App />
        </LintProvider>
      </UsersProvider>
    </AuthProvider>
  </React.StrictMode>
);
