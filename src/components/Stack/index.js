import classNames from "classnames";
import style from "./Stack.module.css";

const Stack = ({
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  wrap = "nowrap",
  spacing = "none",
  fullWidth = false,
  children,
  className,
}) => {
  const classes = classNames(
    className,
    style.Stack,
    fullWidth && style.StackFullWidth
  );

  return <div className={classes}>{children}</div>;
};

export default Stack;
