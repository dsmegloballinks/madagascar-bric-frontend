import React, { useState } from "react";

export default function ReportingInformation() {
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [fokontany, setFokontany] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Reporting Information</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>

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
      <div className="form__bottom__reporting__info">
        <div className="form__bottom__content">N*</div>
        <div className="form__bottom__reporting__info__dob">
          <input />
          <div className="form__bottom__content">Month</div>
          <input
            value={month}
            onChange={(e) => setMonth(e.currentTarget.value)}
          />
          <div className="form__bottom__content">Year</div>
          <input
            value={year}
            onChange={(e) => setYear(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
}
