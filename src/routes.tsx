import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { NotFound, RegisterAsset } from "@/pages";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [{ path: "/", element: <RegisterAsset /> }],
  },
]);

export default routes;