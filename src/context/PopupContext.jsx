import { createContext, useState } from "react";
import AlertPopup from "@components/AlertPopup";

export const PopupContext = createContext();

export default function PopupContextProvider({ children }) {
  const [alertPopupVisibility, setAlertPopupVisibility] = useState(false);
  const [alertPopupMessage, setAlertPopupMessage] = useState("");
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  return (
    <PopupContext.Provider
      value={{
        alertPopupVisibility,
        setAlertPopupVisibility,
        alertPopupMessage,
        setAlertPopupMessage,
        isSidebarHovered,
        setIsSidebarHovered,
      }}
    >
      {children}
      {alertPopupVisibility && (
        <AlertPopup
          onClose={() => setAlertPopupVisibility(false)}
          alertPopupMessage={alertPopupMessage}
        />
      )}
    </PopupContext.Provider>
  );
}
