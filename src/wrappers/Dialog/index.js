import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { createContext, useState } from "react";

const PopupDialog = ({ title, content, isOpen, onClose }) => {
  return (
    <Dialog
      open={true}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        elevation: 10,
        sx: {
          backgroundImage:
            "linear-gradient(123deg, rgb(230 171 2 / 13%), rgb(148 115 19 / 41%))",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  // set up a context
  const [popups, setPopups] = useState([]);

  const addPopup = (popup) => {
    setPopups((prev) => {
      return [...prev, popup];
    });
  };
  const onCloseHelper = () => {
    setPopups((prev) => {
      prev.pop();
      return [...prev];
    });
  };

  return (
    <DialogContext.Provider value={{ addPopup }}>
      {children}
      {popups.map((popup, index) => (
        <PopupDialog
          key={index}
          {...popup}
          onClose={() => onCloseHelper(index)}
        />
      ))}
    </DialogContext.Provider>
  );
};

export default DialogProvider;
