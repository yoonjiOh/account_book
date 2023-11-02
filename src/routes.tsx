import { createBrowserRouter } from "react-router-dom";
import Root from "./App";
import { NotFound, RegisterAsset, Home, AssetDetail } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <RegisterAsset /> },
      { path: "/detail/:id", element: <AssetDetail /> },
    ],
  },
]);

export default routes;