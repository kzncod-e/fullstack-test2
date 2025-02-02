import { createBrowserRouter } from "react-router";

import Home from "../view/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
