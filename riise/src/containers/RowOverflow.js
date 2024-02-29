import React from "react";
import { useState, useEffect } from "react";
import "./RowOverflow.css";

const RowOverflow = ({ children, count }) => {
  const [rowCount, setRowCount] = useState(6);

  useEffect(() => {
    function changeCount() {
      const w = window.innerWidth;
      if (!Array.isArray(children) || children.length === 1) {
        setRowCount(4);
      } else if (w >= 1500) {
        setRowCount(count);
      } else if (w >= 1150) {
        setRowCount(4);
      } else if (w >= 850) {
        setRowCount(3);
      } else if (w >= 550) {
        setRowCount(2);
      } else {
        setRowCount(1);
      }
    }

    changeCount();
    const handleResize = () => changeCount();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [children, count]);

  if (!Array.isArray(children)) {
    children = [children];
  }

  return (
    <div
      className="rowoverflow-container"
      style={{ gridTemplateColumns: `repeat(${rowCount}, 1fr)` }}
    >
      {children.map((child, index) => (
        <div key={index} className="rowoverflow-item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default RowOverflow;
