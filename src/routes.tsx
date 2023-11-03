import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy } from "react";
import { homeLoader } from "@/pages/Home";
import Home from "./pages/Home";

export const RegisterAsset = lazy(
  async () => await import("@/pages/RegisterAsset"),
);
export const NotFound = lazy(async () => await import("@/pages/NotFound"));
export const AssetDetail = lazy(
  async () => await import("@/pages/AssetDetail"),
);
export const ApiErrorBoundary = lazy(
  async () => await import("@/features/ui/components/ApiErrorBoundary"),
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ApiErrorBoundary />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "/register", element: <RegisterAsset /> },
      { path: "/register/edit/:id", element: <RegisterAsset /> },
      {
        path: "/detail/:type/:id",
        element: <AssetDetail />,
      },
    ],
  },
]);

export default routes;
