import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function ChildInformation({
  onNextClick,
  onPrevClick,
  setChildNIU,
  childNIU,
  setChildLastName,
  childLastName,
  setChildFirstName,
  childFirstName,
  setChildDateOfBirth,
  childDateOfBirth,
  setChildTimeOfBirth,
  childTimeOfBirth,
  setChildRegion,
  childRegion,
  setChildDistrict,
  childDistrict,
  setChildCommune,
  childCommune,
  setchildFokontany,
  childFokontany,
  setChildGender,
  childGender,
  setChildParentsMarried,
  childParentsMarried,
  setChildSameUsualResidence,
  childSameUsualResidence,
  setChildBirthInHealthCenter,
  childBirthInHealthCenter,
  setChildHealthCareWorker,
  childHealthCareWorker,
  setChildBirthPlaceAddress,
  childBirthPlaceAddress,
}) {
  const gender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ];
  const [selectedGender, setSelectedGender] = useState("Male");

  // const onNext = () => {
  //   let childObject = {
  //     dob: date,
  //     time: time,
  //     region: region,
  //     district: district,
  //     commune: commune,
  //     municipality: municipality,
  //     fokontany: fokontany,
  //     firstName: firstName,
  //     lastName: lastName,
  //     gender: gender,
  //     birthInHealthCenter: birthInHealthCenter,
  //     healthCareWorker: healthCareWorker,
  //   };
  // };

  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Child</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">NIU</div>
        <input
          value={childNIU}
          onChange={(e) => setChildNIU(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Last Name</div>
        <input
          value={childLastName}
          onChange={(e) => setChildLastName(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">First Name</div>
        <input
          value={childFirstName}
          onChange={(e) => setChildFirstName(e.currentTarget.value)}
        />
      </div>
      <div className="form__top">
        <div className="form__bottom__content">Date of Birth</div>
        {/* <Select options={days} placeholder="DD" /> */}
        <input
          type="date"
          placeholder="DD"
          value={childDateOfBirth}
          onChange={(e) => setChildDateOfBirth(e.currentTarget.value)}
          style={{ width: "35%" }}
        />
        {/* <input
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
        /> */}
        <div className="form__bottom__content" style={{ textAlign: "center" }}>
          Time of Birth
        </div>
        <input
          type="time"
          placeholder="TT:TT"
          value={childTimeOfBirth}
          onChange={(e) => setChildTimeOfBirth(e.currentTarget.value)}
          style={{ width: "35%" }}
        />
      </div>
      <div className="form__bottom__heading">Place Of Birth</div>
      <div className="form__bottom">
        <div className="form__bottom__content">Region</div>
        <input
          value={childRegion}
          onChange={(e) => setChildRegion(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">District</div>
        <input
          value={childDistrict}
          onChange={(e) => setChildDistrict(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Commune</div>
        <input
          value={childCommune}
          onChange={(e) => setChildCommune(e.currentTarget.value)}
        />
      </div>
      {/* <div className="form__bottom">
        <div className="form__bottom__content">Municipality</div>
        <input
          value={municipality}
          onChange={(e) => setMunicipality(e.currentTarget.value)}
        />
      </div> */}
      <div className="form__bottom">
        <div className="form__bottom__content">Fokontany</div>
        <input
          value={childFokontany}
          onChange={(e) => setchildFokontany(e.currentTarget.value)}
        />
      </div>

      <div className="form__bottom__gender__container">
        <div className="form__bottom__content">Gender</div>
        <div style={{ display: "flex" }}>
          {gender.map((item) => (
            <div
              className={
                childGender == item.label
                  ? "form__bottom__content__gender__active"
                  : "form__bottom__content__gender"
              }
              onClick={() => setChildGender(item.label)}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Married Parents?</div>
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
            <div class="radio" onClick={() => setChildParentsMarried("Yes")}>
              <input
                id="radio-1"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-1" class="radio-label">
                Yes
              </label>
            </div>

            <div class="radio" onClick={() => setChildParentsMarried("No")}>
              <input
                id="radio-2"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-2" class="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form__bottom__content" style={{ width: "20%" }}>
            Same usual residence?
          </div>
          <div style={{ display: "flex" }}>
            <div
              class="radio"
              onClick={() => setChildSameUsualResidence("Yes")}
            >
              <input
                id="radio-1"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-1" class="radio-label">
                Yes
              </label>
            </div>

            <div class="radio" onClick={() => setChildSameUsualResidence("No")}>
              <input
                id="radio-2"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-2" class="radio-label">
                No
              </label>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0em 1em",
          }}
        >
          <input
            value={marriedParents}
            onChange={(e) => setMarriedParents(e.currentTarget.value)}
          />
          <div className="form__bottom__content">Same usual residence?</div>
          <input
            value={usualResidence}
            onChange={(e) => setUsualResidence(e.currentTarget.value)}
          />
        </div> */}
      </div>
      <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Birth in Health Center</div>
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
              onClick={() => setChildBirthInHealthCenter("Yes")}
            >
              <input
                id="radio-1"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-1" class="radio-label">
                Yes
              </label>
            </div>

            <div
              class="radio"
              onClick={() => setChildBirthInHealthCenter("No")}
            >
              <input
                id="radio-2"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-2" class="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form__bottom__content" style={{ width: "20%" }}>
            With health care worker?
          </div>
          <div style={{ display: "flex" }}>
            <div class="radio" onClick={() => setChildHealthCareWorker("Yes")}>
              <input
                id="radio-1"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-1" class="radio-label">
                Yes
              </label>
            </div>

            <div class="radio" onClick={() => setChildHealthCareWorker("No")}>
              <input
                id="radio-2"
                name="radio"
                type="radio"
                style={{ width: 0 }}
              />
              <label for="radio-2" class="radio-label">
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Birth in Health Center</div>
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0em 1em",
          }}
        >
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
      </div> */}
      <div className="form__bottom">
        <div className="form__bottom__content">Birth Place Address</div>
        <input
          value={childBirthPlaceAddress}
          onChange={(e) => setChildBirthPlaceAddress(e.currentTarget.value)}
        />
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
