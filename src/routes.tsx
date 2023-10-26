import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { NotFound, RegisterAsset, Home } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <RegisterAsset /> },
    ],
  },
]);

export default routes;