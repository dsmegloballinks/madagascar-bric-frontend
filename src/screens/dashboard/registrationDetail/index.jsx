import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronRight } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, certificateLogo, orgLogo } from "@assets";

import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import { isNullOrEmpty } from "../../../utils/isNullOrEmpty";

export default function RegistrationDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const pdfExportComponent = useRef(null);
  console.log("state", state);

  const [gender, setGender] = useState(
    state.registrationData.cr.gender.toLowerCase() == "masculin".toLowerCase()
  );
  const [gender2, setGender2] = useState(
    state.registrationData.cr.gender.toLowerCase() != "masculin".toLowerCase()
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const generatePDFFile = (event) => {
    pdfExportComponent.current.save();
  };

  const setFormValues = (data, id) => {
    var cut = id ? id : 26;

    var newData = "";
    if (data && data.length < 50) {
      let count = 22 - data.length;
      let test = data.padEnd(count + 50, " ");
      newData = test.substring(0, cut);
    } else newData = "                          ";
    return newData.split("").map((character) => {
      return (
        <div className="details__Info__wrapper__section__information__content">
          {character}
        </div>
      );
    });
  };

  const setDateValues = (data, id) => {
    if (data) {
      var newData = "";
      if (data.length < 50) {
        let count = 22 - data.length;
        let test = data.padEnd(count + 50, " ");
        newData = test.substring(0, id);
      } else newData = "                              ";
      return data.split("").map((character) => {
        return (
          <div className="details__Info__wrapper__section__information__content">
            {character}
          </div>
        );
      });
    }
  };

  return (
    <div className="dashboard__container">
      <div className="main__container__top__bar">
        <div className="details__header">
          <ArrowLeft
            className="details__header__back"
            size={18}
            onClick={() => navigate(-1)}
          />
          Registration Detail <ChevronRight />{" "}
          {state.registrationData && state.registrationData.cr.given_name}
          {/* john */}
        </div>
        <button className="details__print" onClick={generatePDFFile}>
          Print
        </button>
      </div>
      <PDFExport
        ref={pdfExportComponent}
        fileName="Registration Form"
        margin={"50pt"}
      >
        <div className="details__container">
          <div className="details__container__header">
            <img src={orgLogo} />
            <img src={certificateLogo} />
            <div className="details__container__header__title">
              DECLARATION OF BIRTH
            </div>
          </div>
          <div className="details__Info__wrapper">
            <div className="details__Info__wrapper__left">
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  Reporting Information
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Number
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.uin, 10)}
                    {/* {state.registrationData.cr.uin
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Declaration
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {name.split("").map((character) => {
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })} */}
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.cr.dec_date)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.dec_date).format("MM"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.dec_date).format("YYYY"),
                      5
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Transcription of Declaration
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.cr.transcription_date)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.cr.transcription_date
                      ).format("MM"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.cr.transcription_date
                      ).format("YYYY"),
                      5
                    )}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  Information About Child
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    NIU
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.first_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "MM"
                      ),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "YYYY"
                      ),
                      5
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Hour
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "HH"
                      ),
                      5
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      h
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "mm"
                      ),
                      5
                    )}
                  </div>
                  <div
                    className="details__dob__sections"
                    style={{ marginLeft: ".5em" }}
                  >
                    mn
                  </div>
                  <div
                    className="details__dob__sections"
                    style={{ marginLeft: ".5em" }}
                  ></div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Place Of Birth
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.district_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.fokontonay_name)}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Gender
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-1"
                          name="radio-2"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            gender
                            // state.registrationData.cr.gender.toLowerCase() ==
                            // "masculin".toLowerCase()
                          }
                        />
                        <label for="radio-1" class="radio-label">
                          Male
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-2"
                          name="radio-2"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            gender2
                            // state.registrationData.cr.gender.toLowerCase() !=
                            // "masculin".toLowerCase()
                          }
                        />
                        <label for="radio-2" class="radio-label">
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Married Parents?
                  </div>
                  <div style={{ display: "flex" }}>
                    <div class="radio">
                      <input
                        id="radio-3"
                        name="radio-4"
                        type="radio"
                        style={{ width: 0 }}
                        checked={
                          state.registrationData.cr.is_parents_married.toLowerCase() ==
                          "oui".toLowerCase()
                        }
                      />
                      <label for="radio-3" class="radio-label">
                        Yes
                      </label>
                    </div>

                    <div class="radio">
                      <input
                        id="radio-4"
                        name="radio-4"
                        type="radio"
                        style={{ width: 0 }}
                        checked={
                          state.registrationData.cr.is_parents_married.toLowerCase() ==
                          "non".toLowerCase()
                        }
                      />
                      <label for="radio-4" class="radio-label">
                        No
                      </label>
                    </div>
                    <div
                      className="details__Info__wrapper__section__information__title"
                      style={{ paddingLeft: "1em" }}
                    >
                      Same usual residence?
                    </div>
                    <div class="radio">
                      <input
                        id="radio-5"
                        name="radio-6"
                        type="radio"
                        style={{ width: 0 }}
                        checked={
                          state.registrationData.cr.is_residence_same.toLowerCase() ==
                          "oui".toLowerCase()
                        }
                      />
                      <label for="radio-5" class="radio-label">
                        Yes
                      </label>
                    </div>

                    <div class="radio">
                      <input
                        id="radio-6"
                        name="radio-6"
                        type="radio"
                        style={{ width: 0 }}
                        checked={
                          state.registrationData.cr.is_residence_same.toLowerCase() ==
                          "non".toLowerCase()
                        }
                      />
                      <label for="radio-6" class="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Birth in Health Center
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-7"
                          name="radio-8"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.is_birth_in_hc == 1
                          }
                        />
                        <label for="radio-7" class="radio-label">
                          Yes
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-8"
                          name="radio-8"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.is_birth_in_hc == null
                          }
                        />
                        <label for="radio-8" class="radio-label">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    With health care worker?
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-9"
                          name="radio-10"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            !isNullOrEmpty(
                              state.registrationData.cr.is_assisted_by_how
                            )
                          }
                        />
                        <label for="radio-9" class="radio-label">
                          Yes
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-10"
                          name="radio-10"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.is_assisted_by_how == null
                          }
                        />
                        <label for="radio-10" class="radio-label">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Birth Place Address
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.cr.place_of_birth)}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  Information About Mother
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    NIU
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.mother.date_of_birth)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.mother.date_of_birth
                      ).format("MM"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.mother.date_of_birth
                      ).format("YYYY"),
                      5
                    )}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Place Of Birth
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.district_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.mother.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(
                      state.registrationData.mother.fokontonay_name
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Usual Residence
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Profession
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(
                      state.registrationData.mother.cr_profession,
                      22
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Nationality
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div class="radio">
                        <input
                          id="radio-17"
                          name="radio-17"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.mother
                              .is_other_nationality &&
                            state.registrationData.mother.is_other_nationality.toLowerCase() ==
                              "non".toLowerCase()
                          }
                        />
                        <label for="radio-17" class="radio-label">
                          Malagasy
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-18"
                          name="radio-17"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.mother
                              .is_other_nationality &&
                            state.registrationData.mother.is_other_nationality.toLowerCase() ==
                              "oui".toLowerCase()
                          }
                        />
                        <label for="radio-18" class="radio-label">
                          Other
                        </label>
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          margin: "0em .3em",
                          marginBottom: ".2em",
                        }}
                      >
                        (To specify)
                      </div>
                      {state.registrationData.mother.is_other_nationality &&
                      state.registrationData.mother.is_other_nationality.toLowerCase() ==
                        "oui".toLowerCase()
                        ? setFormValues(
                            state.registrationData.mother.nationality_name,
                            10
                          )
                        : setFormValues("            ", 10)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="details__Info__wrapper__left">
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  Information About Father
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    NIU
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.father.date_of_birth)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.father.date_of_birth
                      ).format("MM"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.father.date_of_birth
                      ).format("YYYY"),
                      5
                    )}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Place Of Birth
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.district_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.father.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(
                      state.registrationData.father.fokontonay_name
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Usual Residence
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Profession
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(
                      state.registrationData.father.cr_profession,
                      22
                    )}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  Declarant Information
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Link
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-13"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.father.is_residence_same &&
                            state.registrationData.father.is_residence_same.toLowerCase() ==
                              "Père".toLowerCase()
                          }
                        />
                        <label for="radio-13" class="radio-label">
                          Father
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-14"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.father.is_residence_same &&
                            state.registrationData.father.is_residence_same.toLowerCase() ==
                              "Mère".toLowerCase()
                          }
                        />
                        <label for="radio-14" class="radio-label">
                          Mother
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-15"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "Famille".toLowerCase()
                          }
                        />
                        <label for="radio-15" class="radio-label">
                          Family
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-16"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "agent_sante".toLowerCase()
                          }
                        />
                        <label for="radio-16" class="radio-label">
                          Health worker
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-19"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "Matronne".toLowerCase()
                          }
                        />
                        <label for="radio-19" class="radio-label">
                          Matron
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-20"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "agent_sante".toLowerCase()
                          }
                        />
                        <label for="radio-20" class="radio-label">
                          Matron
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-21"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "AC".toLowerCase()
                          }
                        />
                        <label for="radio-21" class="radio-label">
                          AC
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-22"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "Autre".toLowerCase()
                          }
                        />
                        <label for="radio-22" class="radio-label">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    NIU
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.declarant.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.declarant.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.declarant.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.declarant.date_of_birth)
                        .subtract(1, "day")
                        .format("DD"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Month
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.declarant.date_of_birth
                      ).format("MM"),
                      10
                    )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      Year
                    </div>
                    {setDateValues(
                      moment(
                        state.registrationData.declarant.date_of_birth
                      ).format("YYYY"),
                      5
                    )}
                  </div>
                </div>
                {/* <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Address
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(
                      state.registrationData.declarant.region_of_birth
                    )}
                  </div>
                </div> */}
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Place of Birth
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.foko.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.foko.district_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.foko.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues(state.registrationData.foko.fokontonay_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    Usual Residence
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
              </div>
              <div className="details__info__signatures_container">
                <div className="details__info__signatures_container__item__wrapper">
                  <div className="details__info__content">A</div>
                  <div className="details__info__content__line"></div>
                </div>
                <div className="details__info__signatures_container__item__wrapper">
                  <div className="details__info__content">Le</div>
                  <div className="details__info__content__line"></div>
                </div>
              </div>
              <div
                className="details__info__signatures_container"
                style={{
                  justifyContent: "space-around",
                  marginTop: ".5em",
                  marginLeft: "9em",
                }}
              >
                <div className="details__info__signatures_container__item__wrapper">
                  <div className="details__info__content">
                    Signature of the declarant
                  </div>
                </div>
                <div className="details__info__signatures_container__item__wrapper">
                  <div className="details__info__content">
                    Signature of civil status officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}
