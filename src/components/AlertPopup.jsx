import React from "react";
import { logo } from "@assets";
import { AlertCircle } from "react-feather";

export default function AlertPopup({ onClose, alertPopupMessage }) {
  return (
    <div className="popup">
      <div className="popup__overlay" style={{ zIndex: "99999" }}>
        <div className="alert__popup__container">
          <div className="alert__background__dot"></div>
          <div className="alert__popup__card">
            <AlertCircle size={100} className="alert__popup__logo" />
            <div className="alert__popup__content">
              <div className="alert__popup__content__title">Alert!</div>
              <div className="alert__popup__content__info">
                {alertPopupMessage}
              </div>
              <div className="alert__popup__content__button__wrapper">
                <button
                  className="alert__popup__content__button"
                  onClick={onClose}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
