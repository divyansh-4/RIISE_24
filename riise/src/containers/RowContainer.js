import "./RowContainer.css";
import { useState, useEffect, useCallback, useMemo } from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const RowContainer = ({ children, scroll, speed }) => {
  const [count, setCount] = useState(100);
  const [itemsPos, setItemsPos] = useState(Array(children.length).fill(0));
  const [scrollState, setScrollState] = useState(scroll);
  const [scrollTimer, setScrollTimer] = useState(null);
  const [controlTimer, setControlTimer] = useState(true);

  const [pos, setPos] = useState(0);
  const [sliding, setSliding] = useState(false);

  const width = useMemo(() => {
    return 100 / count;
  }, [count]);

  const scrollMemo = useMemo(() => {
    return scrollState && itemsPos.length > count;
  }, [itemsPos.length, count, scrollState]);

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
    }

    changeCount();
    window.addEventListener("resize", changeCount);
    return () => {
      window.removeEventListener("resize", changeCount);
    };
  }, [itemsPos.length]);

  useEffect(() => {
    function resizeEvent(e) {
      window.clearTimeout(scrollTimer);
      setItemsPos(Array(itemsPos.length).fill(0));
      if (scrollMemo) {
        setControlTimer((ct) => !ct);
      }
    }

    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, [scrollTimer, controlTimer, itemsPos.length, scrollMemo]);

  useEffect(() => {
    window.clearTimeout(scrollTimer);
    if (scrollMemo) {
      setControlTimer((ct) => !ct);
    } else {
    }
  }, [scrollMemo]);

  useEffect(() => {
    if (!scrollMemo) return;
    function scrollItems() {
      const pos = [];
      for (let i = 0; i < itemsPos.length; i++) {
        if (itemsPos[i] <= (-1 - i) * width) {
          pos.push(width * (itemsPos.length - 1 - i));
        } else {
          pos.push(itemsPos[i] - speed / 60);
        }
      }
      setItemsPos(pos);
      setControlTimer(!controlTimer);
    }

    const timer = window.setTimeout(scrollItems, 17);
    setScrollTimer(timer);
  }, [controlTimer]);

  const slideLeft = useCallback(() => {
    if (
      itemsPos.length < count ||
      pos >= itemsPos.length - count - 1 ||
      sliding
    )
      return;

    const newItemPos = [];
    for (let i = 0; i < itemsPos.length; i++) {
      newItemPos.push(itemsPos[i] - width);
    }
    setItemsPos(newItemPos);
    setPos(pos + 1);
    setSliding(true);
    setTimeout(() => {
      setSliding(false);
    }, 1000);
  }, [pos, itemsPos, count, sliding, width]);

  const slideRight = useCallback(() => {
    if (itemsPos.length < count || pos === 0 || sliding) return;

    const newItemPos = [];
    for (let i = 0; i < itemsPos.length; i++) {
      newItemPos.push(itemsPos[i] + width);
    }
    setItemsPos(newItemPos);
    setPos(pos - 1);
    setSliding(true);
    setTimeout(() => {
      setSliding(false);
    }, 1000);
  }, [pos, itemsPos, count, sliding, width]);

  return (
    <div className="row-wrapper">
      <div
        className={`row-container ${!scroll ? "row-container-scroll" : ""}`}
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
                flexBasis: `${width}%`,
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
    </div>
  );
};

export default RowContainer;
