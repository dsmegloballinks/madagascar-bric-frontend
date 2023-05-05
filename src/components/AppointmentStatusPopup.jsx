import React from "react";
import { logo } from "@assets";
import { AlertCircle, X } from "react-feather";
import InputSelect from "./InputSelect";

export default function AppointmentStatusPopup({ onClose }) {
  const appointmentOptions = [
    { value: 1, label: "Appointed" },
    { value: 2, label: "Trasferred" },
    { value: 3, label: "Posting awaited" },
  ];
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
            Update Appointment Status
          </div>
          <div
            className="certificate__wrapper__container "
            style={{ margin: "0em 0em" }}
          >
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Civil Register ID
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Last Name
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                First Name
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Email
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Department
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Official Contact Number
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Address
              </div>
              <input placeholder="" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Status
              </div>
              <InputSelect
                placeholder="Select"
                widthProp={"390px"}
                options={appointmentOptions}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Date
              </div>
              <input placeholder="" type="date" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Time
              </div>
              <input placeholder="" type="time" />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointed By
              </div>
              <input placeholder="" />
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
            <button className="list__filter__button" onClick={() => onAdd()}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
