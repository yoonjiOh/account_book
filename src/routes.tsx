import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound, RegisterAsset, Home, AssetDetail } from "@/pages";
import { homeLoader } from "@/pages/Home";
import { queryClient } from "@/lib/react-query";
import { AssetDetailLoader } from "@/pages/AssetDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "/register", element: <RegisterAsset /> },
      { path: "/register/edit/:id", element: <RegisterAsset /> },
      {
        path: "/detail/:id",
        element: <AssetDetail />,
        loader: ({ params }) =>
          AssetDetailLoader(queryClient, params.id as string),
      },
    ],
  },
]);

export default routes;