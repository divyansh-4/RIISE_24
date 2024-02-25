import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HealthcarePage from "./pages/HealthcarePage";
import DesignforIndia from "./pages/DesignforIndia"
import Roboticsandspace from "./pages/RobonSpace";
import _5G6G from "./pages/5G6G";
import Bridgingthoeryandpractice from "./pages/Bridgingtheoryandpractice";
import Computationalgastronomy from "./pages/Computationalgastronomy";
import Sustainablemobility from "./pages/Sustainablemobility";
import Advancemulticoresystems from "./pages/Advancemulticoresystems";
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
  {
    path: "/designforindia",
    element: <DesignforIndia />,
  },
  {
    path: "/roboticsandspace",
    element: <Roboticsandspace />,
  },
  {
    path: "/5G-6G",
    element: <_5G6G />,
  },
  {
    path:"/bridgingthoeryandpractice",
    element : <Bridgingthoeryandpractice/>
  },
  {
    path:"/computationalgastronomy",
    element : <Computationalgastronomy/>
  },
  {
    path: "/sustainablemobility",
    element: <Sustainablemobility />,
  },
  {
    path: "/advancemulticoresystems",
    element: <Advancemulticoresystems />,
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
