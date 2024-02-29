import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HealthcarePage from "./pages/HealthcarePage";
import DesignforIndia from "./pages/DesignforIndia";
import Roboticsandspace from "./pages/RobonSpace";
import _5G6G from "./pages/5G6G";
import Bridgingthoeryandpractice from "./pages/Bridgingtheoryandpractice";
import Computationalgastronomy from "./pages/Computationalgastronomy";
import Sustainablemobility from "./pages/Sustainablemobility";
import Advancemulticoresystems from "./pages/Advancemulticoresystems";
import Cipd from "./pages/Cipd";
import Bharatai from "./pages/Bharatai";
import Isac from "./pages/Isac";
import Perspectives from "./pages/Perspectives";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
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
        <Route path="/bharatai" element={<Bharatai />} />
        <Route path="/cipd" element={<Cipd />} />
        <Route path="/isac" element={<Isac />} />
        <Route path="/perspectives" element={<Perspectives />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
