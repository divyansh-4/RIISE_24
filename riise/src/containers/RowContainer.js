import "./RowContainer.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const RowContainer = ({ children, scroll, speed }) => {
  const [count, setCount] = useState(100);
  const [scrollState, setScrollState] = useState(scroll);
  const [pos, setPos] = useState(0);
  const [sliding, setSliding] = useState(false);
  const rowContainerRef = useRef(null);

  const [itemsPos, setItemsPos] = useState(Array(children.length).fill(0));

  useEffect(() => {
    setScrollState(scroll);
  }, [scroll]);

  useEffect(() => {
    function changeCount(e) {
      const width = window.innerWidth;
      if (width >= 1800) {
        setCount(5);
      } else if (width >= 1500) {
        setCount(4);
      } else if (width >= 800) {
        setCount(3);
      } else if (width >= 600) {
        setCount(3);
      } else {
        setCount(2);
      }
      setItemsPos(Array(itemsPos.length).fill(0));
      setPos(0);
    }

    changeCount();
    window.addEventListener("resize", changeCount);
    return () => {
      window.removeEventListener("resize", changeCount);
    };
  }, []);

  useEffect(() => {
    if (!scrollState || itemsPos.length <= count) return;
    const rowItems =
      rowContainerRef.current.getElementsByClassName("row-item-container");
    function scrollItems() {
      const pos = [];
      for (let i = 0; i < rowItems.length; i++) {
        if (rowItems[i].getBoundingClientRect().right < 0) {
          pos.push(itemsPos[i] + (100 / count) * itemsPos.length);
        } else {
          pos.push(itemsPos[i] - speed / 60);
        }
      }
      setItemsPos(pos);
    }

    window.requestAnimationFrame(() => {
      window.setTimeout(scrollItems, 17);
    });
  }, [itemsPos, speed, scrollState, count]);

  const slideLeft = useCallback(() => {
    if (
      itemsPos.length < count ||
      pos >= itemsPos.length - count - 1 ||
      sliding
    )
      return;

    const newItemPos = [];
    for (let i = 0; i < itemsPos.length; i++) {
      newItemPos.push(itemsPos[i] - 100 / count);
    }
    setItemsPos(newItemPos);
    setPos(pos + 1);
    setSliding(true);
    setTimeout(() => {
      setSliding(false);
    }, 1000);
  }, [pos, itemsPos, count, sliding]);

  const slideRight = useCallback(() => {
    if (itemsPos.length < count || pos === 0 || sliding) return;

    const newItemPos = [];
    for (let i = 0; i < itemsPos.length; i++) {
      newItemPos.push(itemsPos[i] + 100 / count);
    }
    setItemsPos(newItemPos);
    setPos(pos - 1);
    setSliding(true);
    setTimeout(() => {
      setSliding(false);
    }, 1000);
  }, [pos, itemsPos, count, sliding]);

  return (
    <div
      style={!scroll ? { overflowX: "auto" } : null}
      className="row-container"
      ref={rowContainerRef}
      onMouseOver={() => {
        setScrollState(false);
      }}
      onMouseOut={() => {
        if (scroll) setScrollState(true);
      }}
    >
      <>
        {children.map((child, index) => (
          <div
            className="row-item-container"
            style={{
              flexBasis: `${100 / count}%`,
              left: `${itemsPos[index]}%`,
              transition: `${!scroll ? "left 0.5s ease-in-out" : ""}`,
            }}
          >
            {child}
          </div>
        ))}
      </>
      {/* <div
        className="slide-btn-container"
        style={scroll ? { display: "none" } : null}
      >
        <div className="slide-btn" onClick={slideRight}>
          <IoIosArrowBack color="black" />
        </div>
        <div className="slide-btn" onClick={slideLeft}>
          <IoIosArrowForward color="black" />
        </div>
      </div> */}
    </div>
  );
};

export default RowContainer;
