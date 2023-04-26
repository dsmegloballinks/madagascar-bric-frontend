import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function FatherInformation({
  onNextClick,
  onPrevClick,
  setFatherNiu,
  fatherNiu,
  setFatherLastName,
  fatherLastName,
  setFatherFirstName,
  fatherFirstName,
  setFatherDob,
  fatherDob,
  setMotherFatherSameAddress,
  motherFatherSameAddress,
  setFatherProfession,
  fatherProfession,
}) {
  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Father</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">NIU</div>
        <input
          value={fatherNiu}
          onChange={(e) => setFatherNiu(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Last Name</div>
        <input
          value={fatherLastName}
          onChange={(e) => setFatherLastName(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">First Name</div>
        <input
          value={fatherFirstName}
          onChange={(e) => setFatherFirstName(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">Date of Birth</div>
        <input
          type="date"
          value={fatherDob}
          onChange={(e) => setFatherDob(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom" style={{ justifyContent: "flex-start" }}>
        <div className="form__bottom__content">
          Is Address of Mother and Father same ?
        </div>
        <div class="radio" onClick={() => setMotherFatherSameAddress("Yes")}>
          <input id="radio-1" name="radio" type="radio" style={{ width: 0 }} />
          <label for="radio-1" class="radio-label">
            Yes
          </label>
        </div>

        <div class="radio" onClick={() => setMotherFatherSameAddress("No")}>
          <input id="radio-2" name="radio" type="radio" style={{ width: 0 }} />
          <label for="radio-2" class="radio-label">
            No
          </label>
        </div>
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Profession</div>
        <input
          value={fatherProfession}
          onChange={(e) => setFatherProfession(e.currentTarget.value)}
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
        <div className="form__bottom__content">Fokontany</div>
        <input
          value={fokontany}
          onChange={(e) => setFokontany(e.currentTarget.value)}
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
      </div> */}
      {/* <div className="form__bottom">
        <div className="form__bottom__content">Nationality</div>
        <input placeholder="Malangasy" style={{ width: "43%" }} />
        <input placeholder="Other(Precise)" style={{ width: "43%" }} />
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
