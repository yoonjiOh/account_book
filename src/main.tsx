import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

import "./index.css";
import { ErrorBoundary, Fallback } from "@/features/ui/components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Fallback />}>
      <RouterProvider router={routes} />
    </ErrorBoundary>
  </React.StrictMode>,
);
