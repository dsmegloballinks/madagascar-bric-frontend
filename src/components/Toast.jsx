import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export function CustomError(msg) {
  toast.error(msg, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: "toast__msg",
  });
}

export function NotificationMessage(notification) {
   
  toast.success(<Display notification={notification} />, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  function Display({notification}) {
    const { t, i18n } = useTranslation();
    return (
      <div>
        <div style={{fontSize:"18px", fontWeight:"600", marginBottom:".5em"}}>{t("data_info")}</div>
        <div>{notification}</div>
      </div>
    );
  }
}
