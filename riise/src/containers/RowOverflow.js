import React from "react";
import { useState, useEffect, useMemo } from "react";
import "./RowOverflow.css";

const RowOverflow = ({ children, countRelWidth, center = false }) => {
  const [rowCount, setRowCount] = useState(6);

  const childCount = useMemo(() => {
    return Array.isArray(children) ? children.length : 1;
  }, [children]);

  const countRelWidthMemo = useMemo(() => {
    if (countRelWidth && countRelWidth.length && countRelWidth[0].threshold)
      return countRelWidth;

    const widthThresholds = [1500, 1150, 850, 550, 0];
    if (countRelWidth && countRelWidth.length)
      return widthThresholds.map((threshold, index) => ({
        threshold: threshold,
        count:
          index < countRelWidth.length
            ? countRelWidth[index]
            : countRelWidth[countRelWidth.length - 1],
      }));

    const countValues = [6, 4, 3, 2, 1];
    return widthThresholds.map((threshold, index) => ({
      threshold: threshold,
      count: countValues[index],
    }));
  }, [countRelWidth]);

  useEffect(() => {
    function changeCount() {
      const w = window.innerWidth;
      let maxw = -1;
      let cnt = 0;
      for (const obj of countRelWidthMemo) {
        if (obj.threshold <= w && maxw < obj.threshold) {
          maxw = obj.threshold;
          cnt = obj.count;
        }
      }
      setRowCount(cnt);
    }

    changeCount();
    const handleResize = () => changeCount();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [countRelWidthMemo]);

  return (
    <div
      className="rowoverflow-container"
      style={{ gridTemplateColumns: `repeat(${rowCount}, 1fr)` }}
    >
      {center && childCount < rowCount
        ? Array(Math.floor((rowCount - childCount) / 2))
            .fill(0)
            .map((val, index) => <div></div>)
        : null}
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div key={index} className={`rowoverflow-item`}>
            {child}
          </div>
        ))
      ) : (
        <div className={`rowoverflow-item`}>{children}</div>
      )}
      {center && childCount < rowCount
        ? Array(Math.floor((rowCount - childCount) / 2))
            .fill(0)
            .map((val, index) => <div></div>)
        : null}
    </div>
  );
};

export default RowOverflow;
