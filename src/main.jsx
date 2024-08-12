import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./layouts/Home";
import Packages from "./Page/Packages";
import Help from "./Page/Help";
import Contacts from "./Page/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/help",
        element: <Help></Help>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
