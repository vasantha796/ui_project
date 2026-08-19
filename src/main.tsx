import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/usercontext";
import { OrganizationProvider } from "./context/Organizatoncontext";
import "bootstrap/dist/css/bootstrap.min.css";
import {ThemeProvider} from "./context/ThemeContext"

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
   <ThemeProvider>

  <React.StrictMode>

    <UserProvider>

      <OrganizationProvider>
         

        <App />

      </OrganizationProvider>

    </UserProvider>

  </React.StrictMode>
  </ThemeProvider>
);