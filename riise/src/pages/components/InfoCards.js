export const InfoCard1 = ({ children, classname = "", style = {} }) => {
  return (
    <div
      className={classname}
      style={{
        ...{
          backgroundColor: "#10884C",
          color: "white",
          fontWeight: "400",
          borderRadius: "2em",
          padding: "1em",
        },
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const InfoCard2 = ({ children, classname = "", style = {} }) => {
  return (
    <div
      className={classname}
      style={{
        ...{
          backgroundColor: "#E3FFE7",
          fontFamily: "'lato', sans-serif",
          padding: "2.5em",
        },
        ...style,
      }}
    >
      {children}
    </div>
  );
};
