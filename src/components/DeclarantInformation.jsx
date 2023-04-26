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
      {/* <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Married Parents?</div>
        <input />
        <div className="form__bottom__content">Same usual residence?</div>
        <input />
      </div> */}
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
      <div className="form__bottom">
        <div className="form__bottom__content">NIU</div>
        <input
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

      {/* <div className="form__bottom__heading">Place Of Birth</div>
      <div className="form__bottom">
        <div className="form__bottom__content">Region</div>
        <input
          value={region}
          onChange={(e) => setRegion(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">District</div>
        <input
          value={district}
          onChange={(e) => setDistrict(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Commune</div>
        <input
          value={commune}
          onChange={(e) => setCommune(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Municipality</div>
        <input
          value={municipality}
          onChange={(e) => setMunicipality(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Fokontany</div>
        <input
          value={fokontany}
          onChange={(e) => setFokontany(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Function</div>
        <input
          value={functions}
          onChange={(e) => setFunctions(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom__heading">Usual Residence</div>
      <div className="form__bottom">
        <div className="form__bottom__content">Region</div>
        <input
          value={usualRegion}
          onChange={(e) => setUsualRegion(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">District</div>
        <input
          value={usualDistrict}
          onChange={(e) => setUsualDistrict(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Commune</div>
        <input
          value={usualCommune}
          onChange={(e) => setUsualCommune(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Municipality</div>
        <input
          value={usualMunicipality}
          onChange={(e) => setUsualMunicipality(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Fokontany</div>
        <input
          value={usualFokontany}
          onChange={(e) => setUsualFokontany(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Profession</div>
        <input
          value={profession}
          onChange={(e) => setProfession(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Nationality</div>
        <input placeholder="Malangasy" style={{ width: "43%" }} />
        <input placeholder="Other(Preciser)" style={{ width: "43%" }} />
      </div> */}

      {/* <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Birth in Health Center</div>
        <input />
        <div className="form__bottom__content">with health care worker</div>
        <input />
      </div> */}
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
