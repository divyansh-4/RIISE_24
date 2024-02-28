import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HealthcarePage from "./pages/HealthcarePage";
import DesignforIndia from "./pages/DesignforIndia";
import Roboticsandspace from "./pages/RobonSpace";
import _5G6G from "./pages/5G6G";
import Bridgingthoeryandpractice from "./pages/Bridgingtheoryandpractice";
import Computationalgastronomy from "./pages/Computationalgastronomy";
import Sustainablemobility from "./pages/Sustainablemobility";
import Advancemulticoresystems from "./pages/Advancemulticoresystems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
        <Route path="/designforindia" element={<DesignforIndia />} />
        <Route path="/roboticsandspace" element={<Roboticsandspace />} />
        <Route path="/5G-6G" element={<_5G6G />} />
        <Route path="/bridgingthoeryandpractice" element={<Bridgingthoeryandpractice />} />
        <Route path="/computationalgastronomy" element={<Computationalgastronomy />} />
        <Route path="/sustainablemobility" element={<Sustainablemobility />} />
        <Route path="/advancemulticoresystems" element={<Advancemulticoresystems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
