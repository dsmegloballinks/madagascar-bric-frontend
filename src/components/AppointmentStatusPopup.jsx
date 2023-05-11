import React, { useState, useContext, useEffect } from "react";
import { X } from "react-feather";
import InputSelect from "./InputSelect";
import { PopupContext } from "../context/PopupContext";
import { isNullOrEmpty } from "../utils/isNullOrEmpty";
import { registrarAppointmentPostCall } from "../apis/Repo";
import moment from "moment";

export default function AppointmentStatusPopup({
  onClose,
  onAdd,
  isPostCallLoading,
  selectedItem,
}) {
  const { setAlertPopupVisibility, setAlertPopupMessage } =
    useContext(PopupContext);
  const [appointmentAddress, setAppointmentAddress] = useState(
    selectedItem && selectedItem.location
  );
  const [appointmentsStatus, setAppointmentStatus] = useState(
    selectedItem && selectedItem.appointment_status
  );
  const [appointmentDate, setAppointmentDate] = useState(
    selectedItem && moment(selectedItem.appointment_date).format("YYYY-MM-DD")
  );
  const [appointmentTime, setAppointmentTime] = useState(
    selectedItem && selectedItem.appointment_time
  );
  const [appointedBy, setAppointedBy] = useState(
    selectedItem && selectedItem.appointed_by
  );
  const appointmentOptions = [
    { value: 1, label: "Appointed" },
    { value: 2, label: "Trasferred" },
    { value: 3, label: "Posting awaited" },
  ];

  useEffect(() => {
    if (selectedItem) setAppointmentStatusValue();
  }, []);

  const setAppointmentStatusValue = () => {
    if (selectedItem && selectedItem.appointment_status == "Appointed")
      setAppointmentStatus({ value: 1, label: "Appointed" });
    else if (selectedItem && selectedItem.appointment_status == "Trasferred")
      setAppointmentStatus({ value: 2, label: "Trasferred" });
    else setAppointmentStatus({ value: 3, label: "Posting awaited" });
  };

  const setErrorMessageAndVisibility = (text, visibility) => {
    setAlertPopupMessage(text);
    setAlertPopupVisibility(visibility);
  };

  const isViewValid = () => {
    if (isNullOrEmpty(appointmentAddress))
      setErrorMessageAndVisibility("Enter appointment address", true);
    else if (isNullOrEmpty(appointmentsStatus))
      setErrorMessageAndVisibility("Enter appointment status", true);
    else if (isNullOrEmpty(appointmentDate))
      setErrorMessageAndVisibility("Enter appointment date", true);
    else if (isNullOrEmpty(appointmentTime))
      setErrorMessageAndVisibility("Enter appointment time", true);
    else if (isNullOrEmpty(appointedBy))
      setErrorMessageAndVisibility("Enter appointed by", true);
    else return true;
    return false;
  };

  const postAppointment = () => {
    if (isViewValid()) {
      onAdd(
        appointmentAddress,
        appointmentsStatus,
        appointmentDate,
        appointmentTime,
        appointedBy
      );
    }
  };

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
            {/* <div className="form__bottom">
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
            </div> */}
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Address
              </div>
              <input
                placeholder=""
                value={appointmentAddress}
                onChange={(e) => setAppointmentAddress(e.currentTarget.value)}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Status
              </div>
              <InputSelect
                placeholder="Select"
                widthProp={"390px"}
                options={appointmentOptions}
                value={appointmentsStatus}
                onChange={(e) => setAppointmentStatus(e)}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Date
              </div>
              <input
                placeholder=""
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.currentTarget.value)}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointment Time
              </div>
              <input
                placeholder=""
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.currentTarget.value)}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                Appointed By
              </div>
              <input
                placeholder=""
                value={appointedBy}
                onChange={(e) => setAppointedBy(e.currentTarget.value)}
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
              onClick={() => postAppointment()}
              disabled={isPostCallLoading}
            >
              {isPostCallLoading ? "Processing..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
