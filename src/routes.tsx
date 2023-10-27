import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { NotFound, RegisterAsset, Home, AssetDetail } from "@/pages";
import { homeLoader } from "@/pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home />, loader: homeLoader },
      { path: "/register", element: <RegisterAsset /> },
      { path: "/detail/:id", element: <AssetDetail /> },
    ],
  },
]);

export default routes;