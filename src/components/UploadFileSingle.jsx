import React, { useState } from "react";
import { X, Plus } from "react-feather";
import { logo } from "@assets";

export default function UploadFileSingle({ onClose, onAdd }) {
  const [certificate, setCertificate] = useState(null);
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
          <div className="container__sidebar__header">
            <div className="container__sidebar__logo">
              <img
                src={logo}
                alt="logo"
                className="container__sidebar__logo__img"
              />
              <div className="container__sidebar__logo__name">
                Madagascar Birth Registration
              </div>
            </div>
            <button
              className="container__sidebar__button"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} color="currentColor" />
            </button>
          </div>
          <div
            className="certificate__wrapper__container"
            style={{ margin: "2em 0em" }}
          >
            <div className="certificate__wrapper__container__content">
              Upload File
            </div>
            {certificate === null ? (
              <div className="container__main__content__details__main__input__field__wrapper__image">
                <input
                  type="file"
                  onChange={(e) => {
                    setCertificate(e.target.files[0]);
                  }}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  multiple={false}
                  className="container__main__content__details__main__input__field__wrapper__image__input"
                />
                <div className="container__main__content__details__main__input__field__wrapper__image__content">
                  <Plus size={20} color="currentColor" />
                </div>
              </div>
            ) : (
              <div className="input">
                <input
                  type="file"
                  onChange={(e) => {
                    setCertificate(e.target.files[0]);
                  }}
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  multiple={false}
                  className="container__main__content__details__main__input__field__wrapper__image__input"
                  style={{
                    height: "60px",
                    width: "62px",
                  }}
                />
                <div
                  // src={URL.createObjectURL(certificate)}
                  alt={certificate?.name}
                  className="container__main__content__details__main__input__field__wrapper__image__content__img"
                  style={{
                    display: "flex",
                    border: "1px solid black",
                    borderRadius: "10px",
                    width: "fit-content",
                  }}
                >
                  <div
                    style={{
                      background: "#0F7840",
                      padding: "1em 1.5em",
                      color: "white",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    }}
                  >
                    X{" "}
                  </div>
                  <div style={{ padding: ".5em", wordBreak: "break-word" }}>
                    {certificate?.name}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              onClick={() => onAdd(certificate)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
