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
   
  toast.info(<Display notification={notification} />);

  function Display({notification}) {
    const { t, i18n } = useTranslation();
    return (
      <div>
        <h4>{t("data_info")}</h4>
        <p>{notification}</p>
      </div>
    );
  }
}
