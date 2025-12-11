import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { AuthProvider } from "./contexts/AuthContext";
import { UsersProvider } from "./contexts/UsersContext";
import { LintProvider } from "./contexts/LintContext";
import "@/lib/firebase";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
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
