import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function MotherInformation({
  onNextClick,
  onPrevClick,
  setMotherNiu,
  motherNiu,
  setMotherLastName,
  motherLastName,
  setMotherFirstName,
  motherFirstName,
  setMotherDob,
  motherDob,
  setMotherRegion,
  motherRegion,
  setMotherDistrict,
  motherDistrict,
  setMotherCommune,
  motherCommune,
  setMotherFokontany,
  motherFokontany,
  setMotherProfession,
  motherProfession,
  setMotherNationality,
  motherNationality,
}) {
  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Mother</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">NIU</div>
        <input
          maxLength={10}
          value={motherNiu}
          onChange={(e) => setMotherNiu(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Last Name</div>
        <input
          value={motherLastName}
          onChange={(e) => setMotherLastName(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">First Name (Optional)</div>
        <input
          value={motherFirstName}
          onChange={(e) => setMotherFirstName(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">Date of Birth</div>
        <input
          type="date"
          value={motherDob}
          onChange={(e) => setMotherDob(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom__heading">Place Of Birth</div>
      <div className="form__bottom">
        <div className="form__bottom__content">Region</div>
        <input
          value={motherRegion}
          onChange={(e) => setMotherRegion(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">District</div>
        <input
          value={motherDistrict}
          onChange={(e) => setMotherDistrict(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Commune</div>
        <input
          value={motherCommune}
          onChange={(e) => setMotherCommune(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">Fokontany</div>
        <input
          value={motherFokontany}
          onChange={(e) => setMotherFokontany(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">Profession</div>
        <input
          value={motherProfession}
          onChange={(e) => setMotherProfession(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Nationality</div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0em 1em",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              class="radio"
              onClick={() => setMotherNationality("Malangasy")}
            >
              <input
                id="radio-1"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-1" class="radio-label">
                Malangasy
              </label>
            </div>

            <div class="radio" onClick={() => setMotherNationality("other")}>
              <input
                id="radio-2"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-2" class="radio-label">
                Other
              </label>
            </div>
          </div>

          {motherNationality == "other" && (
            <input placeholder="Other(Precise)" style={{ width: "63%" }} />
          )}
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
