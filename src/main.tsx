import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/usercontext";
import { OrganizationProvider } from "./context/Organizatoncontext";
import "bootstrap/dist/css/bootstrap-grid.min.css";
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>

    <UserProvider>

      <OrganizationProvider>

        <App />

      </OrganizationProvider>

    </UserProvider>

  </React.StrictMode>
);