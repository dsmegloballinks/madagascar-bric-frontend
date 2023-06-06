import { createContext, useState } from "react";
import AlertPopup from "@components/AlertPopup";
import TransparentLoader from "@components/TransparentLoader";

export const PopupContext = createContext();

export default function PopupContextProvider({ children }) {
  const [alertPopupVisibility, setAlertPopupVisibility] = useState(false);
  const [alertPopupMessage, setAlertPopupMessage] = useState("");
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  return (
    <PopupContext.Provider
      value={{
        alertPopupVisibility,
        setAlertPopupVisibility,
        alertPopupMessage,
        setAlertPopupMessage,
        isSidebarHovered,
        setIsSidebarHovered,
        isGlobalLoading,
        setIsGlobalLoading
      }}
    >
      {children}
      {alertPopupVisibility && (
        <AlertPopup
          onClose={() => setAlertPopupVisibility(false)}
          alertPopupMessage={alertPopupMessage}
        />
      )}
      {
        isGlobalLoading && <TransparentLoader />
      }
    </PopupContext.Provider>
  );
}
