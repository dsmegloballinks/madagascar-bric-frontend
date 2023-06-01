import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronRight } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import { logo, certificateLogo, orgLogo } from "@assets";

import { PDFExport } from "@progress/kendo-react-pdf";
import moment from "moment";
import { isNullOrEmpty } from "../../../utils/isNullOrEmpty";
import { useTranslation } from "react-i18next";

export default function RegistrationDetail() {
  const { t, i18n } = useTranslation();
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

  /**
   * The function generates a PDF file using a React component.
   */
  const generatePDFFile = (event) => {
    pdfExportComponent.current.save();
  };

  /**
   * The function sets form values by formatting data and returning it as an array of div elements.
   * @returns an array of JSX elements, where each element is a `<div>` with a class name of
   * `details__Info__wrapper__section__information__content` and contains a single character from the
   * `newData` string. The `newData` string is generated based on the `data` and `id` parameters passed
   * to the function. If `id` is not provided
   */
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

  /**
   * The function takes in a string and an ID, pads the string with spaces, and returns an array of div
   * elements containing each character of the string up to the specified ID.
   * @returns The function `setDateValues` returns an array of JSX elements, where each element is a
   * `div` with the class name `details__Info__wrapper__section__information__content` and contains a
   * single character from the `data` string. The `data` string is padded with spaces to a length of 72
   * characters, and then the substring up to the `id` index is
   */
  const setDateValues = (data, id) => {
    var newData = "";
    let count = 22 - data.length;
    let test = data.padEnd(count + 50, " ");
    newData = test.substring(0, id);
    return newData.split("").map((character) => {
      return (
        <div className="details__Info__wrapper__section__information__content">
          {character}
        </div>
      );
    });
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
          {t("reg_destails")} <ChevronRight />{" "}
          {state.registrationData && state.registrationData.cr.given_name}
          {/* john */}
        </div>
        <button className="details__print" onClick={generatePDFFile}>
          {t("print")}
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
              {t("birth_declaration")}
            </div>
          </div>
          <div className="details__Info__wrapper">
            <div className="details__Info__wrapper__left">
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  {t("reporting_info")}
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("number")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.uin, 10)}
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
                    {t("dec_date")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {/* {name.split("").map((character) => {
                      return (
                        <div className="details__Info__wrapper__section__information__content">
                          {character}
                        </div>
                      );
                    })} */}
                    <div className="details__dob__sections">{t("day")}</div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.dec_date)
                          .subtract(1, "day")
                          .format("DD"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("month")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.dec_date).format("MM"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {setDateValues(
                      moment(state.registrationData.cr.dec_date).format("YYYY"),
                      4
                    )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("trns_dec_date")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">{t("day")}</div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.transcription_date)
                          .subtract(1, "day")
                          .format("DD"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("month")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(
                          state.registrationData.cr.transcription_date
                        ).format("MM"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(
                          state.registrationData.cr.transcription_date
                        ).format("YYYY"),
                        4
                      )}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  {t("child_info")}
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("niu")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("last_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("first_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.first_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("dob")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">{t("day")}</div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.date_of_birth)
                          .subtract(1, "day")
                          .format("DD"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("month")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.date_of_birth).format(
                          "MM"
                        ),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.date_of_birth).format(
                          "YYYY"
                        ),
                        4
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("hour")}
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.date_of_birth).format(
                          "HH"
                        ),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      h
                    </div>
                    {state.registrationData.cr &&
                      setDateValues(
                        moment(state.registrationData.cr.date_of_birth).format(
                          "mm"
                        ),
                        2
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
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("bith_place")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.district_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.fokontonay_name)}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("gender")}
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
                          {t("male")}
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
                          {t("female")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("married_parents")}?
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
                        {t("yes")}
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
                        {t("no")}
                      </label>
                    </div>
                    <div
                      className="details__Info__wrapper__section__information__title"
                      style={{ paddingLeft: "1em" }}
                    >
                      {t("same_resid")}
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
                        {t("yes")}
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
                        {t("no")}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("birth_hc")}
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
                          {t("yes")}
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
                          {t("no")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("with_hcw")}?
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
                          {t("yes")}
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
                          {t("no")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("bith_address")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.cr &&
                      setFormValues(state.registrationData.cr.place_of_birth)}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  {t("mother_info")}
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("niu")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(state.registrationData.mother.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("last_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(state.registrationData.mother.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("first_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(state.registrationData.mother.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("dob")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">{t("day")}</div>
                    {state.registrationData.mother &&
                      setDateValues(
                        moment(state.registrationData.mother.date_of_birth)
                          .subtract(1, "day")
                          .format("DD"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("month")}
                    </div>
                    {state.registrationData.mother &&
                      setDateValues(
                        moment(
                          state.registrationData.mother.date_of_birth
                        ).format("MM"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {state.registrationData.mother &&
                      setDateValues(
                        moment(
                          state.registrationData.mother.date_of_birth
                        ).format("YYYY"),
                        4
                      )}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("bith_place")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(state.registrationData.mother.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(
                        state.registrationData.mother.district_name
                      )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(state.registrationData.mother.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(
                        state.registrationData.mother.fokontonay_name
                      )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("usual_resid")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("profession")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.mother &&
                      setFormValues(
                        state.registrationData.mother.cr_profession,
                        22
                      )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("nationality")}
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
                            state.registrationData.mother &&
                            state.registrationData.mother.nationality_name.toLowerCase() ==
                              "malagasy".toLowerCase()
                          }
                        />
                        <label for="radio-17" class="radio-label">
                          {t("malagasy")}
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-18"
                          name="radio-17"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.mother &&
                            state.registrationData.mother.nationality_name.toLowerCase() !=
                              "malagasy".toLowerCase()
                          }
                        />
                        <label for="radio-18" class="radio-label">
                          {t("other_spec")}
                        </label>
                      </div>
                      {/* <div
                        style={{
                          fontSize: "12px",
                          margin: "0em .3em",
                          marginBottom: ".2em",
                        }}
                      >
                        (To specify)
                      </div> */}
                      {state.registrationData.mother.nationality_name &&
                      state.registrationData.mother.nationality_name.toLowerCase() !=
                        "malagasy".toLowerCase()
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
                  {t("father_info")}
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("niu")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(state.registrationData.father.uin, 10)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("last_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(state.registrationData.father.last_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("first_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(state.registrationData.father.given_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("dob")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">{t("day")}</div>
                    {state.registrationData.father &&
                      setDateValues(
                        moment(state.registrationData.father.date_of_birth)
                          .subtract(1, "day")
                          .format("DD"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("month")}
                    </div>
                    {state.registrationData.father &&
                      setDateValues(
                        moment(
                          state.registrationData.father.date_of_birth
                        ).format("MM"),
                        2
                      )}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {state.registrationData.father &&
                      setDateValues(
                        moment(
                          state.registrationData.father.date_of_birth
                        ).format("YYYY"),
                        4
                      )}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("bith_place")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(state.registrationData.father.region_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(
                        state.registrationData.father.district_name
                      )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(state.registrationData.father.commune_name)}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(
                        state.registrationData.father.fokontonay_name
                      )}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("usual_resid")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("profession")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.father &&
                      setFormValues(
                        state.registrationData.father.cr_profession,
                        22
                      )}
                  </div>
                </div>
              </div>
              <div className="details__Info__wrapper__section">
                <div className="details__Info__wrapper__section__title">
                  {t("dec_info")}
                </div>
                <div className="details__Info__wrapper__section__title__border"></div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("link")}
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
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "Pere".toLowerCase()
                          }
                        />
                        <label for="radio-13" class="radio-label">
                          {t("father")}
                        </label>
                      </div>

                      <div class="radio">
                        <input
                          id="radio-14"
                          name="radio-13"
                          type="radio"
                          style={{ width: 0 }}
                          checked={
                            state.registrationData.cr.dec_relation &&
                            state.registrationData.cr.dec_relation.toLowerCase() ==
                              "Mere".toLowerCase()
                          }
                        />
                        <label for="radio-14" class="radio-label">
                          {t("mother")}
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
                          {t("family")}
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
                          {t("health_worker")}
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
                          {t("matron")}
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
                          {t("ac")}
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
                          {t("other")}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("niu")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.declarant
                      ? setFormValues(state.registrationData.declarant.uin, 10)
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("last_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.declarant
                      ? setFormValues(
                          state.registrationData.declarant.last_name
                        )
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("first_name")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.declarant
                      ? setFormValues(
                          state.registrationData.declarant.given_name
                        )
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("dob")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    <div className="details__dob__sections">{"day"}</div>
                    {state.registrationData.declarant
                      ? setDateValues(
                          moment(state.registrationData.declarant.date_of_birth)
                            .subtract(1, "day")
                            .format("DD"),
                          2
                        )
                      : setDateValues("", 2)}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {"month"}
                    </div>
                    {state.registrationData.declarant
                      ? setDateValues(
                          moment(
                            state.registrationData.declarant.date_of_birth
                          ).format("MM"),
                          2
                        )
                      : setDateValues("", 2)}
                    <div
                      className="details__dob__sections"
                      style={{ marginLeft: ".5em" }}
                    >
                      {t("year")}
                    </div>
                    {state.registrationData.declarant
                      ? setDateValues(
                          moment(
                            state.registrationData.declarant.date_of_birth
                          ).format("YYYY"),
                          4
                        )
                      : setDateValues("", 4)}
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
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("bith_place")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.foko
                      ? setFormValues(state.registrationData.foko.region_name)
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.foko
                      ? setFormValues(state.registrationData.foko.district_name)
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.foko
                      ? setFormValues(state.registrationData.foko.commune_name)
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {state.registrationData.foko
                      ? setFormValues(
                          state.registrationData.foko.fokontonay_name
                        )
                      : setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title"></div>
                  <div
                    className="details__Info__wrapper__section__information__content__wrapper"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      textTransform: "capitalize",
                    }}
                  >
                    {t("usual_resid")}
                  </div>
                </div>

                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("region")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("district")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("commune")}
                  </div>
                  <div className="details__Info__wrapper__section__information__content__wrapper">
                    {setFormValues("")}
                  </div>
                </div>
                <div className="details__Info__wrapper__section__information">
                  <div className="details__Info__wrapper__section__information__title">
                    {t("fokontany")}
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
                  <div className="details__info__content">{t("dec_sign")}</div>
                </div>
                <div className="details__info__signatures_container__item__wrapper">
                  <div className="details__info__content">
                    {t("civil_sign")}
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
