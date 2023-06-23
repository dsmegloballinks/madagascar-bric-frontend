import React from "react";
import { logo } from "@assets";
import { AlertCircle } from "react-feather";
import { useTranslation } from "react-i18next";

export default function SuccessPopup({ onClose, sucessPopupMessage }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="popup">
      <div className="popup__overlay" style={{ zIndex: "99999" }}>
        <div className="alert__popup__container">
          <div className="alert__background__dot" style={ {background: "#09bd5d"}}  ></div>
          <div className="alert__popup__card">
            <AlertCircle size={100} className="alert__popup__logo" style={ {background: "#09bd5d"}}  />
            <div className="alert__popup__content">
              <div className="alert__popup__content__title">{t("data_info")}</div>
              <div className="alert__popup__content__info">
                {sucessPopupMessage}
              </div>
              <div className="alert__popup__content__button__wrapper">
                <button
                  className="alert__popup__content__button"
                  onClick={onClose}
                >
                  {t("ok")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
