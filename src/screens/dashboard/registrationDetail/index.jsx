import React, { useEffect } from "react";
import { ChevronRight } from "react-feather";

export default function RegistrationDetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="main__container">
      <div className="main__container__top__bar">
        <div className="details__header">
          Registration Detail <ChevronRight /> Child Name
        </div>
        <button className="details__print">Print</button>
      </div>
      <div className="details__container">
        <div className="details__container__section" style={{ width: "100%" }}>
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
        </div>
      </div>
    </div>
  );
}
