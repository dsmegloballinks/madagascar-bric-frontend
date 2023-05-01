import React, { useState } from "react";
import { X, Plus } from "react-feather";
import { logo } from "@assets";

export default function ViewFiles({ onClose }) {
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
            <div className="files__container">
              <div className="files__container__wrapper">
                <div className="certificate__wrapper__container__content">
                  Registry
                </div>
                <img src={logo} className="files__container__wrapper__img" />
              </div>
              <div className="files__container__wrapper">
                <div className="certificate__wrapper__container__content">
                  Birth Certificate
                </div>
                <img src={logo} className="files__container__wrapper__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
