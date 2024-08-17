import classNames from "classnames";
import style from "./Stack.module.css";

const Stack = ({
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  wrap = "nowrap",
  spacing = "1rem",
  fullWidth = false,
  width,
  children,
  className,
}) => {
  const classes = classNames(
    className,
    style.Stack,
    fullWidth && style.StackFullWidth
  );

  return (
    <div
      className={classes}
      style={{
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexWrap: wrap,
        gap: spacing,
        width: fullWidth ? "100%" : width ?? "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Stack;
