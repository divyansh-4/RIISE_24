export const MainTitle = ({ fontSize = "2em", children, style = {} }) => {
  return (
    <div
      style={{
        ...{
          textAlign: "center",
          margin: "1em auto",
          fontSize: fontSize,
          //   fontFamily: "'Lato', sans-serif",
          fontWeight: "600",
        },
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export const SubTitle = ({
  color = "green",
  fontSize = "1.3em",
  children,
  style = {},
}) => {
  return (
    <div
      style={{
        ...{
          color: color,
          textAlign: "center",
          margin: "1em auto",
          fontSize: fontSize,
          fontStyle: "italic",
        },
        ...style,
      }}
    >
      {children}
    </div>
  );
};
