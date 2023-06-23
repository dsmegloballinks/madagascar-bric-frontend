import React from "react";
import { logo } from "@assets";
import { AlertCircle } from "react-feather";
import { useTranslation } from "react-i18next";

export default function ConfirmationPopup({ onClose, onDelete }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="popup">
      <div className="popup__overlay" style={{ zIndex: "99999" }}>
        <div className="alert__popup__container">
          <div className="alert__background__dot" style={ {background: "#9b8af2" }}></div>
          <div className="alert__popup__card">
            <AlertCircle size={100} className="alert__popup__logo" style={ {background: "#9b8af2" }} />
            <div className="alert__popup__content">
              <div className="alert__popup__content__title">{t("warning")}</div>
              <div className="alert__popup__content__info">
                {t("delete_msg")}
              </div>
              <div
                className="alert__popup__content__button__wrapper"
                style={{ justifyContent: "space-evenly" }}
              >
                <button
                  className="alert__popup__content__button"
                  onClick={onDelete}
                  style={{ background: "#9b8af2" }}
                >
                  {t("yes")}
                </button>
                <button
                  className="alert__popup__content__button"
                  onClick={onClose}
                  style={{ background: "var(--colorLight)" }}
                >
                  {t("no")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
