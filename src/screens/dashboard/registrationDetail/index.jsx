import React, { useEffect, useRef } from "react";
import { ArrowLeft, ChevronRight } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, certificateLogo, orgLogo } from "@assets";

import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";

export default function RegistrationDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const pdfExportComponent = useRef(null);
  console.log("state", state);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const generatePDFFile = (event) => {
    pdfExportComponent.current.save();
  };
  var name = "The FormGroup ref will  be";

  const setFormValues = (data) => {
    if (data) {
      var newData = "";
      if (data.length < 22) {
        let count = 22 - data.length;
        let test = data.padEnd(count + 50, " ");
        newData = test.substring(0, 26);
      }
      return newData.split("").map((character) => {
        return (
          <div className="details__Info__wrapper__section__information__content">
            {character}
          </div>
        );
      });
    }
  };

  const setDateValues = (data, id) => {
    if (data) {
      var newData = "";
      if (data.length < 22) {
        let count = 22 - data.length;
        let test = data.padEnd(count + 50, " ");
        newData = test.substring(0, id);
      }
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
                    {setFormValues(state.registrationData.cr.uin)}
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
                    {name.split("").map((character) => {
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Transcription of Declaration
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {name.split("").map((character) => {
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })}
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
                    {setFormValues(state.registrationData.cr.uin)}
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
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {moment(state.registrationData.cr.date_of_birth)
                      .format("DDMMMMYYYY")
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {/* {setFormValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "DDMMMMYYYY"
                      )
                    )} */}
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "dddd"
                      ),
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
                        "MMMM"
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
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Time of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {moment(state.registrationData.cr.date_of_birth)
                      .format("HHmm")
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      moment(state.registrationData.cr.date_of_birth).format(
                        "HHmm"
                      )
                    )}
                  </div>
                </div>
                <div
                  className="details__Info__wrapper__section__title"
                  style={{ marginBottom: ".8em" }}
                >
                  Place Of Birth
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.region_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.region_of_birth)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.district_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.district_of_birth)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.commune_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.commune_of_birth)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.fokontany_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.cr.fokontany_of_birth
                    )}
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
                            state.registrationData.cr.gender.toLowerCase() ==
                            "masculin".toLowerCase()
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
                            state.registrationData.cr.gender.toLowerCase() !=
                            "masculin".toLowerCase()
                          }
                        />
                        <label for="radio-2" class="radio-label">
                          Female
                        </label>
                      </div>
                    </div>
                    {/* {name.split("").map((character) => {
                      
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
                  </div>
                  {/* <div className="details__Info__wrapper__section__information__content__wrapper">
                    {name.split("").map((character) => {
                      
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })}
                  </div> */}
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Same usual residence?
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div style={{ display: "flex" }}>
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
                    {/* {name.split("").map((character) => {
                      
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
                            state.registrationData.cr.is_birth_in_hc.toLowerCase() ==
                            "oui".toLowerCase()
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
                            state.registrationData.cr.is_birth_in_hc.toLowerCase() ==
                            "non".toLowerCase()
                          }
                        />
                        <label for="radio-8" class="radio-label">
                          No
                        </label>
                      </div>
                    </div>
                    {/* {name.split("").map((character) => {
                      
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
                            state.registrationData.cr.is_assisted_by_how.toLowerCase() ==
                            "oui".toLowerCase()
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
                            state.registrationData.cr.is_assisted_by_how.toLowerCase() ==
                            "non".toLowerCase()
                          }
                        />
                        <label for="radio-10" class="radio-label">
                          No
                        </label>
                      </div>
                    </div>
                    {/* {name.split("").map((character) => {
                      
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
                    Birth Place Address
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.cr.place_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.cr.place_of_birth)}
                  </div>
                </div>
              </div>
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
                    {/* {state.registrationData.father.uin
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.father.uin)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.father.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.father.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.father.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.father.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {moment(state.registrationData.father.date_of_birth)
                      .format("DDMMMMYYYY")
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {/* {setFormValues(
                      moment(
                        state.registrationData.father.date_of_birth
                      ).format("DDMMMMYYYY")
                    )} */}
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(
                        state.registrationData.father.date_of_birth
                      ).format("dddd"),
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
                      ).format("MMMM"),
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
                  <div className="details__Info__wrapper__section__information__title">
                    Is Address of Mother and Father same ?
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {name.split("").map((character) => {
                      
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })} */}
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-11"
                          name="radio-12"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.father.is_residence_same &&
                            state.registrationData.father.is_residence_same.toLowerCase() ==
                              "oui".toLowerCase()
                          }
                        />
                        <label for="radio-11" class="radio-label">
                          Yes
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-12"
                          name="radio-12"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.father.is_residence_same &&
                            state.registrationData.father.is_residence_same.toLowerCase() ==
                              "non".toLowerCase()
                          }
                        />
                        <label for="radio-12" class="radio-label">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Profession
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.father.cr_profession
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.father.cr_profession)}
                  </div>
                </div>
                {state.registrationData.father.is_residence_same &&
                state.registrationData.father.is_residence_same.toLowerCase() ==
                  "non".toLowerCase() ? (
                  <>
                    <div
                      className="details__Info__wrapper__section__title"
                      style={{ marginBottom: ".8em" }}
                    >
                      Place Of Birth
                    </div>
                    <div className="details__Info__wrapper__section__information">
                      <div className="details__Info__wrapper__section__information__title">
                        Region
                      </div>
                      <div className="details__Info__wrapper__section__information__content__wrapper">
                        {/* {state.registrationData.father.region_of_birth
                          .split("")
                          .map((character) => {
                            return (
                              <div className="details__Info__wrapper__section__information__content">
                                {character}
                              </div>
                            );
                          })} */}
                        {setFormValues(
                          state.registrationData.father.region_of_birth
                        )}
                      </div>
                    </div>
                    <div className="details__Info__wrapper__section__information">
                      <div className="details__Info__wrapper__section__information__title">
                        District
                      </div>
                      <div className="details__Info__wrapper__section__information__content__wrapper">
                        {/* {state.registrationData.father.district_of_birth
                          .split("")
                          .map((character) => {
                            return (
                              <div className="details__Info__wrapper__section__information__content">
                                {character}
                              </div>
                            );
                          })} */}
                        {setFormValues(
                          state.registrationData.father.district_of_birth
                        )}
                      </div>
                    </div>
                    <div className="details__Info__wrapper__section__information">
                      <div className="details__Info__wrapper__section__information__title">
                        Commune
                      </div>
                      <div className="details__Info__wrapper__section__information__content__wrapper">
                        {/* {state.registrationData.father.commune_of_birth
                          .split("")
                          .map((character) => {
                            return (
                              <div className="details__Info__wrapper__section__information__content">
                                {character}
                              </div>
                            );
                          })} */}
                        {setFormValues(
                          state.registrationData.father.commune_of_birth
                        )}
                      </div>
                    </div>
                    <div className="details__Info__wrapper__section__information">
                      <div className="details__Info__wrapper__section__information__title">
                        Fokontany
                      </div>
                      <div className="details__Info__wrapper__section__information__content__wrapper">
                        {/* {state.registrationData.father.fokontany_of_birth
                          .split("")
                          .map((character) => {
                            return (
                              <div className="details__Info__wrapper__section__information__content">
                                {character}
                              </div>
                            );
                          })} */}
                        {setFormValues(
                          state.registrationData.father.fokontany_of_birth
                        )}
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="details__Info__wrapper__left">
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
                    {/* {state.registrationData.mother.uin
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.mother.uin)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.mother.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.mother.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Date of Birth
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {moment(state.registrationData.mother.date_of_birth)
                      .format("DDMMMMYYYY")
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {/* {setFormValues(state.registrationData.mother.date_of_birth)} */}
                    <div className="details__dob__sections">Day</div>
                    {setDateValues(
                      moment(
                        state.registrationData.mother.date_of_birth
                      ).format("dddd"),
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
                      ).format("MMMM"),
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
                <div
                  className="details__Info__wrapper__section__title"
                  style={{ marginBottom: ".8em" }}
                >
                  Place Of Birth
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Region
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.region_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.mother.region_of_birth
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    District
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.district_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.mother.district_of_birth
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Commune
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.commune_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.mother.commune_of_birth
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Fokontany
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.fokontany_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.mother.fokontany_of_birth
                    )}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Profession
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.cr_profession
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.mother.cr_profession)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Nationality
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.mother.nationality_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.mother.nationality_name
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
                    {/* {state.registrationData.declarant.uin
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {/* {setFormValues(state.registrationData.declarant.uin)} */}
                    <div style={{ display: "flex" }}>
                      <div class="radio">
                        <input
                          id="radio-13"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          // checked={
                          //   state.registrationData.father.is_residence_same &&
                          //   state.registrationData.father.is_residence_same.toLowerCase() ==
                          //     "oui".toLowerCase()
                          // }
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
                          // checked={
                          //   state.registrationData.father.is_residence_same &&
                          //   state.registrationData.father.is_residence_same.toLowerCase() ==
                          //     "non".toLowerCase()
                          // }
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
                          // checked={
                          //   state.registrationData.father.is_residence_same &&
                          //   state.registrationData.father.is_residence_same.toLowerCase() ==
                          //     "non".toLowerCase()
                          // }
                        />
                        <label for="radio-15" class="radio-label">
                          Health Officer
                        </label>
                      </div>
                      <div class="radio">
                        <input
                          id="radio-16"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          // checked={
                          //   state.registrationData.father.is_residence_same &&
                          //   state.registrationData.father.is_residence_same.toLowerCase() ==
                          //     "non".toLowerCase()
                          // }
                        />
                        <label for="radio-16" class="radio-label">
                          Matron
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
                    {/* {state.registrationData.declarant.uin
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.declarant.uin)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Last Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.declarant.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(state.registrationData.declarant.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    First Name
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.declarant.given_name
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
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
                      moment(
                        state.registrationData.declarant.date_of_birth
                      ).format("dddd"),
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
                      ).format("MMMM"),
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
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    Address
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {state.registrationData.declarant.region_of_birth
                      .split("")
                      .map((character) => {
                        return (
                          <div className="details__Info__wrapper__section__information__content">
                            {character}
                          </div>
                        );
                      })} */}
                    {setFormValues(
                      state.registrationData.declarant.region_of_birth
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="details__container__section" style={{ width: "100%" }}>
          <div className="details__container__heading">
            Reporting Information
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Number
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Declaration
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Transcription of Declaration
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
        </div>
        <div className="details__container__section" style={{ width: "100%" }}>
          <div className="details__container__heading">Child Information</div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Last Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              First Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Birth
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Region
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              District
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Commune
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Fokontany
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Gender
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Married Parents
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Same usual residence?
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Birth in Health Center
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Health Care Worker
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Birth Place Address
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
        </div>

        <div className="details__container__section">
          <div className="details__container__heading">Mother Information</div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              NIU
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Last Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              First Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Birth
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__heading">Place Of Birth</div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Region
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              District
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Commune
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Fokontany
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__heading">Usual Residence</div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Region
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              District
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Commune
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Fokontany
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Profession
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Nationality
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
        </div>
        <div className="details__container__section">
          <div className="details__container__heading">Father Information</div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              NIU
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Last Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              First Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Birth
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Is Address of Mother and Father same ?
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__heading">Place Of Birth</div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Region
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              District
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Commune
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Fokontany
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__heading">Usual Residence</div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Region
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              District
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Commune
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Fokontany
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Profession
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
        </div>
        <div className="details__container__section" style={{ width: "100%" }}>
          <div className="details__container__heading">
            Declarant Information
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Link
            </div>
            <div className="details__container__content__wrapper__info">
              Father
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              NIU
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Last Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              First Name
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>

          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Date of Birth
            </div>
            <div className="details__container__content__wrapper__info">
              23/23/23
            </div>
          </div>
          <div className="details__container__content__wrapper">
            <div className="details__container__content__wrapper__heading">
              Address
            </div>
            <div className="details__container__content__wrapper__info">
              Punjab
            </div>
          </div>
        </div> */}
        </div>
      </PDFExport>
    </div>
  );
}
