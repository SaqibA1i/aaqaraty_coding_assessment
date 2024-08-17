import DialogProvider from "./Dialog";

const Wrapper = ({ children }) => {
  return <DialogProvider>{children}</DialogProvider>;
};

export default Wrapper;
