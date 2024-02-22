import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HealthcarePage from "./pages/HealthcarePage";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./main.css";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/healthcare",
    element: <HealthcarePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
