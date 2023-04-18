import React, { useState } from "react";
import Select from "./Select";

export default function ChildInformation() {
  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [selectedGender, setSelectedGender] = useState("Male");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [time, setTime] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [commune, setCommune] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [fokontany, setFokontany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthInHealthCenter, setBirthInHealthCenter] = useState("");
  const [healthCareWorker, setHealthCareWorker] = useState("");

  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Child</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>
      <div className="form__top">
        <div className="form__bottom__content">Date of Birth</div>
        {/* <Select options={days} placeholder="DD" /> */}
        <input
          placeholder="DD"
          maxLength={2}
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
        />
        <input
          placeholder="MM"
          maxLength={2}
          value={month}
          onChange={(e) => setMonth(e.currentTarget.value)}
        />
        <input
          placeholder="YYYY"
          maxLength={4}
          value={year}
          onChange={(e) => setYear(e.currentTarget.value)}
        />
        <input
          placeholder="TT:TT"
          maxLength={5}
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom__heading">Place Of Birth</div>
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
        <div className="form__bottom__content">First Name</div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Last Name</div>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom__gender__container">
        <div className="form__bottom__content">Gender</div>
        {gender.map((item) => (
          <div
            className={
              selectedGender == item.label
                ? "form__bottom__content__gender__active"
                : "form__bottom__content__gender"
            }
            onClick={() => setSelectedGender(item.label)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Birth in Health Center</div>
        <input
          value={birthInHealthCenter}
          onChange={(e) => setBirthInHealthCenter(e.currentTarget.value)}
        />
        <div className="form__bottom__content">with health care worker</div>
        <input
          value={healthCareWorker}
          onChange={(e) => setHealthCareWorker(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
