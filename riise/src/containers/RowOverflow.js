import { useState, useEffect } from "react";
import "./RowOverflow.css";

const RowOverflow = ({ children }) => {
  const [rowCount, setRowCount] = useState(6);

  useEffect(() => {
    function changeCount(e) {
      const w = window.innerWidth;
      if (w >= 1000) {
        setRowCount(4);
      } else if (w >= 800) {
        setRowCount(3);
      } else if (w >= 375) {
        setRowCount(2);
      } else {
        setRowCount(1);
      }
    }

    changeCount();
    window.addEventListener("resize", changeCount);
    return () => {
      window.removeEventListener("resize", changeCount);
    };
  });

  return (
    <div
      className="rowoverflow-container"
      style={{ gridTemplateColumns: `repeat(${rowCount}, 1fr)` }}
    >
      {children.map((child) => {
        return <div className="rowoverflow-item">{child}</div>;
      })}
    </div>
  );
};

export default RowOverflow;
