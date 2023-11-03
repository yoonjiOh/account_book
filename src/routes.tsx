import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { lazy, Suspense } from "react";
import { homeLoader } from "@/pages/Home";
import Home from "@/pages/Home";
import PageSkeleton from "@/pages/PageSkeleton";

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
      {
        path: "/",
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Home />
          </Suspense>
        ),
        loader: homeLoader,
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <RegisterAsset />
          </Suspense>
        ),
      },
      {
        path: "/register/edit/:id",
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <RegisterAsset />
          </Suspense>
        ),
      },
      {
        path: "/detail/:type/:id",
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <AssetDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
