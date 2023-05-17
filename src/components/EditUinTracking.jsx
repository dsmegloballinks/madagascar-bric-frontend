import React, { useState } from "react";
import { logo } from "@assets";
import { AlertCircle, X } from "react-feather";
import InputSelect from "./InputSelect";

export default function EditUinTracking({ onClose, selectedRecord, onAdd }) {
  const [number, setNumber] = useState(selectedRecord.cr.uin);
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

          <div className="certificate__wrapper__container__content">
            Update NIU Number
          </div>
          <div
            className="certificate__wrapper__container "
            style={{ margin: "0em 0em" }}
          >
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                NIU Number
              </div>
              <input
                placeholder=""
                value={number}
                onChange={(e) => setNumber(e.currentTarget.value)}
              />
            </div>
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
              Cancel
            </button>
            <button
              className="list__filter__button"
              onClick={() => onAdd(number, selectedRecord)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
