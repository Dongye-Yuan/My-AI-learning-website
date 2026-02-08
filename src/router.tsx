import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import type { RouteObject } from "react-router-dom";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
