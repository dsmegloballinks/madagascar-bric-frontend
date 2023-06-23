import { createContext, useState } from "react";
import AlertPopup from "@components/AlertPopup";
import TransparentLoader from "@components/TransparentLoader";
import SuccessPopup from "@components/SuccessPopup";

export const PopupContext = createContext();

export default function PopupContextProvider({ children }) {
  const [alertPopupVisibility, setAlertPopupVisibility] = useState(false);
  const [alertPopupMessage, setAlertPopupMessage] = useState("");
  const [sucessPopupVisibility, setSuccessPopupVisibility] = useState(false);
  const [sucessPopupMessage, setSuccessPopupMessage] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
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
        setIsGlobalLoading,
        popupTitle,
        setPopupTitle,
        sucessPopupVisibility,
        setSuccessPopupVisibility,
        sucessPopupMessage,
        setSuccessPopupMessage,
      }}
    >
      {children}
      {alertPopupVisibility && (
        <AlertPopup
          onClose={() => setAlertPopupVisibility(false)}
          alertPopupMessage={alertPopupMessage}
          popupTitle={popupTitle}
        />
      )}
      {sucessPopupVisibility && (
        <SuccessPopup
          onClose={() => setSuccessPopupVisibility(false)}
          sucessPopupMessage={sucessPopupMessage}
        />
      )}
      {
        isGlobalLoading && <TransparentLoader />
      }
    </PopupContext.Provider>
  );
}
