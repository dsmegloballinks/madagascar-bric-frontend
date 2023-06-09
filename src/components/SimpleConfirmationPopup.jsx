import React from "react";
import { logo } from "@assets";
import { AlertCircle, X } from "react-feather";
import InputSelect from "./InputSelect";

export default function SimpleConfirmationPopup({ onClose, text, onYes }) {
  return (
    <div className="popup">
      <div className="popup__overlay">
        <div className="popup__overlay__card">
          <button
            onClick={() => onClose(false)}
            className="popup__overlay__card__close"
          >
            <X size={20} color="white" />
          </button>

          <div className="certificate__wrapper__container__content">Alert!</div>
          <div
            className="certificate__wrapper__container "
            style={{ margin: "0em 0em" }}
          >
            <div className="simple__popup__content">{text} </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1em",
            }}
          >
            <button
              className="list__filter__button__reset"
              style={{ marginRight: ".5em" }}
              onClick={() => onClose(false)}
            >
              No
            </button>
            <button className="list__filter__button" onClick={() => onYes()}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
