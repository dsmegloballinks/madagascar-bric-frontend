import React, { useState } from "react";
import Select from "./Select";

export default function FatherInformation() {
  const [marriedParents, setMarriedParents] = useState("");
  const [usualResidence, setUsualResidence] = useState("");
  const [niu, setNiu] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [commune, setCommune] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [fokontany, setFokontany] = useState("");
  const [functions, setFunctions] = useState("");
  const [usualRegion, setUsualRegion] = useState("");
  const [usualDistrict, setUsualDistrict] = useState("");
  const [usualCommune, setUsualCommune] = useState("");
  const [usualMunicipality, setUsualMunicipality] = useState("");
  const [usualFokontany, setUsualFokontany] = useState("");
  const [profession, setProfession] = useState("");
  const [nationality, setNationality] = useState("");

  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Information About Father</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>
      <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Married Parents?</div>
        <input
          value={marriedParents}
          onChange={(e) => setMarriedParents(e.currentTarget.value)}
        />
        <div className="form__bottom__content">Same usual residence?</div>
        <input
          value={usualResidence}
          onChange={(e) => setUsualResidence(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">NIU</div>
        <input value={niu} onChange={(e) => setNiu(e.currentTarget.value)} />
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
      <div className="form__bottom">
        <div className="form__bottom__content">Date of Birth</div>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.currentTarget.value)}
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
      </div>

      {/* <div className="form__bottom__last__bar">
        <div className="form__bottom__content">Birth in Health Center</div>
        <input />
        <div className="form__bottom__content">with health care worker</div>
        <input />
      </div> */}
    </div>
  );
}
