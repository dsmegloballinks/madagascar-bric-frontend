import React, { useState } from "react";
import { Plus, ArrowLeft, ArrowRight } from "react-feather";

export default function RegistrationCertificates({
  onNextClick,
  onPrevClick,
  setRegistry,
  registry,
  setCertificate,
  certificate,
}) {
  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Registration Certificates</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>
      <div className="certificate__wrapper">
        <div className="certificate__wrapper__container">
          <div className="certificate__wrapper__container__content">
            Registry Page
          </div>
          <div className="container__main__content__details__main__input__field__wrapper__image">
            <input
              type="file"
              onChange={(e) => {
                setRegistry(e.target.files[0]);
              }}
              accept="image/*"
              multiple={false}
              className="container__main__content__details__main__input__field__wrapper__image__input"
            />
            {registry === null ? (
              <div className="container__main__content__details__main__input__field__wrapper__image__content">
                <Plus size={20} color="currentColor" />
              </div>
            ) : (
              <img
                src={URL.createObjectURL(registry)}
                alt={registry?.name}
                className="container__main__content__details__main__input__field__wrapper__image__content__img"
              />
            )}
          </div>
        </div>
        <div className="certificate__wrapper__container">
          <div className="certificate__wrapper__container__content">
            Birth Certificate
          </div>
          <div className="container__main__content__details__main__input__field__wrapper__image">
            <input
              type="file"
              onChange={(e) => {
                setCertificate(e.target.files[0]);
              }}
              accept="image/*"
              multiple={false}
              className="container__main__content__details__main__input__field__wrapper__image__input"
            />
            {certificate === null ? (
              <div className="container__main__content__details__main__input__field__wrapper__image__content">
                <Plus size={20} color="currentColor" />
              </div>
            ) : (
              <img
                src={URL.createObjectURL(certificate)}
                alt={certificate?.name}
                className="container__main__content__details__main__input__field__wrapper__image__content__img"
              />
            )}
          </div>
        </div>
      </div>
      <div className="form__buttons__container">
        <button className="prev__button" onClick={onPrevClick}>
          {" "}
          <ArrowLeft size={18} style={{ marginRight: "1.5em" }} /> Previous{" "}
        </button>
        <button className="next__button" onClick={onNextClick}>
          Next
          <ArrowRight size={18} style={{ marginLeft: "1.5em" }} />
        </button>
      </div>
    </div>
  );
}
