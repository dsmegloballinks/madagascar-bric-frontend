import React, { useState, useContext, useEffect } from "react";
import { X } from "react-feather";
import InputSelect from "./InputSelect";
import { PopupContext } from "../context/PopupContext";
import { isNullOrEmpty } from "../utils/isNullOrEmpty";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function AppointmentStatusPopup({
  onClose,
  onAdd,
  isPostCallLoading,
  selectedItem,
}) {
  const { t, i18n } = useTranslation();
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
    { value: 1, label: t("appoint"), title: "Appointed" },
    { value: 2, label: t("transfer"), title: "Transferred" },
    { value: 3, label: t("post_await"), title: "Posting awaited" },
  ];

  useEffect(() => {
    if (selectedItem) setAppointmentStatusValue();
  }, []);

  /**
   * The function sets the appointment status value based on the selected item's appointment status.
   */
  const setAppointmentStatusValue = () => {
    if (selectedItem && selectedItem.appointment_status == "Appointed")
      setAppointmentStatus({ value: 1, label: "Appointed" });
    else if (selectedItem && selectedItem.appointment_status == "Trasferred")
      setAppointmentStatus({ value: 2, label: "Trasferred" });
    else setAppointmentStatus({ value: 3, label: "Posting awaited" });
  };

  /**
   * This function sets the message and visibility of an alert popup.
   */
  const setErrorMessageAndVisibility = (text, visibility) => {
    setAlertPopupMessage(text);
    setAlertPopupVisibility(visibility);
  };

  /**
   * The function checks if certain appointment details are null or empty and sets an error message if
   * so, returning false if any are empty and true otherwise.
   * @returns a boolean value. If all the conditions are met, it returns true, otherwise it returns
   * false.
   */
  const isViewValid = () => {
    if (isNullOrEmpty(appointmentAddress))
      setErrorMessageAndVisibility(t("enter_app_add"), true);
    else if (isNullOrEmpty(appointmentsStatus))
      setErrorMessageAndVisibility(t("enter_app_status"), true);
    else if (isNullOrEmpty(appointmentDate))
      setErrorMessageAndVisibility(t("enter_app_date"), true);
    else if (isNullOrEmpty(appointmentTime))
      setErrorMessageAndVisibility(t("enter_app_time"), true);
    else if (isNullOrEmpty(appointedBy))
      setErrorMessageAndVisibility(t("enter_app_by"), true);
    else return true;
    return false;
  };

  /**
   * The function `postAppointment` adds a new appointment if the input values are valid.
   */
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
            {t("update_appt")}
          </div>
          <div
            className="certificate__wrapper__container "
            style={{ margin: "0em 0em" }}
          >
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                {t("appt_address")}
              </div>
              <input
                placeholder=""
                value={appointmentAddress}
                onChange={(e) => setAppointmentAddress(e.currentTarget.value)}
              />
            </div>
            <div className="form__bottom">
              <div className="form__bottom__content" style={{ width: "30%" }}>
                {t("appt_status")}
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
                {t("appt_date")}
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
                {t("appt_time")}
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
                {t("appt_by")}
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
              {t("cancel")}
            </button>
            <button
              className="list__filter__button"
              onClick={() => postAppointment()}
              disabled={isPostCallLoading}
            >
              {isPostCallLoading ? t("processing") : t("save")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
