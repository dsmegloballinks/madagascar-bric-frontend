import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function DeclarantInformation({
  onNextClick,
  onPrevClick,
  setDeclarantLink,
  declarantLink,
  setDeclarantNiu,
  declarantNiu,
  setDeclarantLastName,
  declarantLastName,
  setDeclarantFirstName,
  declarantFirstName,
  setDeclarantDob,
  declarantDob,
  setDeclarantAddress,
  declarantAddress,
}) {
  const link = [
    { label: "Father", value: "father" },
    { label: "Mother", value: "mother" },
    { label: "Health Officer", value: "health officer" },
    { label: "Matron", value: "Matron" },
  ];

  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Declarant</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>

      <div
        className="form__bottom__gender__container"
        style={{ width: "100%" }}
      >
        <div className="form__bottom__content">Link</div>
        {link.map((item) => (
          <div
            className={
              declarantLink == item.label
                ? "form__bottom__content__gender__active"
                : "form__bottom__content__gender"
            }
            onClick={() => setDeclarantLink(item.label)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {declarantLink == "Father" || declarantLink == "Mother" ? null : (
        <>
          <div className="form__bottom">
            <div className="form__bottom__content">NIU</div>
            <input
              maxLength={10}
              value={declarantNiu}
              onChange={(e) => setDeclarantNiu(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Last Name</div>
            <input
              value={declarantLastName}
              onChange={(e) => setDeclarantLastName(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">First Name</div>
            <input
              value={declarantFirstName}
              onChange={(e) => setDeclarantFirstName(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Date of Birth</div>
            <input
              type="date"
              value={declarantDob}
              onChange={(e) => setDeclarantDob(e.currentTarget.value)}
            />
          </div>
          <div className="form__bottom">
            <div className="form__bottom__content">Address</div>
            <input
              value={declarantAddress}
              onChange={(e) => setDeclarantAddress(e.currentTarget.value)}
            />
          </div>
        </>
      )}

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
