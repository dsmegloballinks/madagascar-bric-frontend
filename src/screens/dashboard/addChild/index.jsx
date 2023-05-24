import React, { useContext, useState } from "react";
import RegistrationStatuses from "@components/RegisterationStatueses";
import ChildInformation from "@components/ChildInformation";
import FatherInformation from "@components/FatherInformation";
import MotherInformation from "@components/MotherInformation";
import DeclarantInformation from "@components/DeclarantInformation";
import ReportingInformation from "@components/ReportingInformation";
import RegistrationCertificates from "@components/RegisterationCertificates";
import { PopupContext } from "../../../context/PopupContext";

export default function addChild() {
  const { isSidebarHovered } = useContext(PopupContext);
  const isSuperAdmin = localStorage.getItem("isAdmin");
  let [activeStep, setActiveStep] = useState(0);
  const [number, setNumber] = useState("");
  const [dateOfDeclaration, setDateOfDeclaration] = useState("");
  const [dateOfTranscriptionDeclaration, setDateOfTranscriptionDeclaration] =
    useState("");
  const [childNIU, setChildNIU] = useState("");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLastName, setChildLastName] = useState("");
  const [childDateOfBirth, setChildDateOfBirth] = useState("");
  const [childTimeOfBirth, setChildTimeOfBirth] = useState("");
  const [childRegion, setChildRegion] = useState("");
  const [childDistrict, setChildDistrict] = useState("");
  const [childCommune, setChildCommune] = useState("");
  const [childFokontany, setchildFokontany] = useState("");
  const [childGender, setChildGender] = useState("Male");
  const [childParentsMarried, setChildParentsMarried] = useState("");
  const [childSameUsualResidence, setChildSameUsualResidence] = useState("");
  const [childBirthInHealthCenter, setChildBirthInHealthCenter] = useState("");
  const [childHealthCareWorker, setChildHealthCareWorker] = useState("");
  const [childBirthPlaceAddress, setChildBirthPlaceAddress] = useState("");

  const [motherNiu, setMotherNiu] = useState("");
  const [motherFirstName, setMotherFirstName] = useState("");
  const [motherLastName, setMotherLastName] = useState("");
  const [motherDob, setMotherDob] = useState("");
  const [motherRegion, setMotherRegion] = useState("");
  const [motherDistrict, setMotherDistrict] = useState("");
  const [motherCommune, setMotherCommune] = useState("");
  const [motherFokontany, setMotherFokontany] = useState("");
  const [motherUsualRegion, setMotherUsualRegion] = useState("");
  const [motherUsualDistrict, setMotherUsualDistrict] = useState("");
  const [motherUsualCommune, setMotherUsualCommune] = useState("");
  const [motherUsualFokontany, setMotherUsualFokontany] = useState("");
  const [motherProfession, setMotherProfession] = useState("");
  const [motherNationality, setMotherNationality] = useState("");

  const [fatherNiu, setFatherNiu] = useState("");
  const [fatherFirstName, setFatherFirstName] = useState("");
  const [fatherLastName, setFatherLastName] = useState("");
  const [fatherDob, setFatherDob] = useState("");
  const [motherFatherSameAddress, setMotherFatherSameAddress] = useState(true);
  const [fatherProfession, setFatherProfession] = useState("");
  const [fatherRegion, setFatherRegion] = useState("");
  const [fatherDistrict, setFatherDistrict] = useState("");
  const [fatherCommune, setFatherCommune] = useState("");
  const [fatherFokontany, setFatherFokontany] = useState("");
  const [fatherUsualRegion, setFatherUsualRegion] = useState("");
  const [fatherUsualDistrict, setFatherUsualDistrict] = useState("");
  const [fatherUsualCommune, setFatherUsualCommune] = useState("");
  const [fatherUsualFokontany, setFatherUsualFokontany] = useState("");

  const [declarantLink, setDeclarantLink] = useState("");
  const [declarantNiu, setDeclarantNiu] = useState("");
  const [declarantFirstName, setDeclarantFirstName] = useState("");
  const [declarantLastName, setDeclarantLastName] = useState("");
  const [declarantDob, setDeclarantDob] = useState("");
  const [declarantAddress, setDeclarantAddress] = useState("");

  const [registry, setRegistry] = useState(null);
  const [certificate, setCertificate] = useState(null);

  let [hoverStyle, setHoverStyle] = useState("");

  /* The above code is using the `useEffect` hook in a React component to update the `hoverStyle` state
 variable based on the value of the `isSidebarHovered` prop. If `isSidebarHovered` is true,
 `hoverStyle` is set to "superAdmin__dashboard__container", otherwise it is set to
 "dashboard__container". The `useEffect` hook is triggered whenever `isSidebarHovered` changes. */
  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  /**
   * The function increments the active step by 1 and scrolls to the top of the page if the active step
   * is not already at 5.
   */
  const onNextClick = () => {
    if (activeStep != 5) {
      setActiveStep((activeStep = activeStep + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /**
   * The function onPrevClick decrements the activeStep state by 1 and scrolls to the top of the page if
   * the activeStep is not 0.
   */
  const onPrevClick = () => {
    if (activeStep != 0) {
      setActiveStep((activeStep = activeStep - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className={hoverStyle}>
      <div className="dashboard__container__top__bar">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_165_12269)">
            <path d="M5.66667 0H2.125C1.56141 0 1.02091 0.223883 0.622398 0.622398C0.223883 1.02091 0 1.56141 0 2.125L0 5.66667H2.125L2.11013 7.79167L3.52679 7.79875L3.54167 5.66667H5.66667V3.53033L7.79167 3.54167L7.79875 2.125L5.66667 2.11367V0ZM4.25 4.25H1.41667V2.125C1.41667 1.93714 1.49129 1.75697 1.62413 1.62413C1.75697 1.49129 1.93714 1.41667 2.125 1.41667H4.25V4.25Z" />
            <path d="M14.8753 0H11.3336V2.125L9.21216 2.11367L9.20508 3.53033L11.3336 3.54167V5.66667H13.4692L13.4586 7.79167L14.8753 7.79875L14.8859 5.66667H17.0003V2.125C17.0003 1.56141 16.7764 1.02091 16.3779 0.622398C15.9794 0.223883 15.4389 0 14.8753 0V0ZM15.5836 4.25H12.7503V1.41667H14.8753C15.0631 1.41667 15.2433 1.49129 15.3762 1.62413C15.509 1.75697 15.5836 1.93714 15.5836 2.125V4.25Z" />
            <path d="M14.8905 9.21216L13.4739 9.20508L13.4625 11.3336H11.334V13.47L9.21253 13.4586L9.20898 14.8753L11.334 14.8866V17.0003H14.8756C15.4392 17.0003 15.9797 16.7764 16.3782 16.3779C16.7768 15.9794 17.0006 15.4389 17.0006 14.8753V11.3336H14.8756L14.8905 9.21216ZM15.584 14.8753C15.584 15.0631 15.5093 15.2433 15.3765 15.3762C15.2437 15.509 15.0635 15.5836 14.8756 15.5836H12.7506V12.7503H15.584V14.8753Z" />
            <path d="M5.66667 11.332H3.53104L3.54167 9.21057L2.125 9.20703L2.11437 11.332H0V14.8737C0 15.4373 0.223883 15.9778 0.622398 16.3763C1.02091 16.7748 1.56141 16.9987 2.125 16.9987H5.66667V14.8737L7.79167 14.8886L7.79875 13.4719L5.66667 13.4606V11.332ZM4.25 15.582H2.125C1.93714 15.582 1.75697 15.5074 1.62413 15.3746C1.49129 15.2417 1.41667 15.0616 1.41667 14.8737V12.7487H4.25V15.582Z" />
          </g>
          <defs>
            <clipPath id="clip0_165_12269">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Add a Child
      </div>
      <div>
        <RegistrationStatuses activeStep={activeStep} />
      </div>
      <div className="form__container">
        {activeStep == 0 ? (
          <ReportingInformation
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setNumber={setNumber}
            number={number}
            setDateOfDeclaration={setDateOfDeclaration}
            dateOfDeclaration={dateOfDeclaration}
            setDateOfTranscriptionDeclaration={
              setDateOfTranscriptionDeclaration
            }
            dateOfTranscriptionDeclaration={dateOfTranscriptionDeclaration}
          />
        ) : activeStep == 1 ? (
          <ChildInformation
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setChildNIU={setChildNIU}
            childNIU={childNIU}
            setChildLastName={setChildLastName}
            childLastName={childLastName}
            setChildFirstName={setChildFirstName}
            childFirstName={childFirstName}
            setChildDateOfBirth={setChildDateOfBirth}
            childDateOfBirth={childDateOfBirth}
            setChildTimeOfBirth={setChildTimeOfBirth}
            childTimeOfBirth={childTimeOfBirth}
            setChildRegion={setChildRegion}
            childRegion={childRegion}
            setChildDistrict={setChildDistrict}
            childDistrict={childDistrict}
            setChildCommune={setChildCommune}
            childCommune={childCommune}
            setchildFokontany={setchildFokontany}
            childFokontany={childFokontany}
            setChildGender={setChildGender}
            childGender={childGender}
            setChildParentsMarried={setChildParentsMarried}
            childParentsMarried={childParentsMarried}
            setChildSameUsualResidence={setChildSameUsualResidence}
            childSameUsualResidence={childSameUsualResidence}
            setChildBirthInHealthCenter={setChildBirthInHealthCenter}
            childBirthInHealthCenter={childBirthInHealthCenter}
            setChildHealthCareWorker={setChildHealthCareWorker}
            childHealthCareWorker={childHealthCareWorker}
            setChildBirthPlaceAddress={setChildBirthPlaceAddress}
            childBirthPlaceAddress={childBirthPlaceAddress}
          />
        ) : activeStep == 2 ? (
          <MotherInformation
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setMotherNiu={setMotherNiu}
            motherNiu={motherNiu}
            setMotherLastName={setMotherLastName}
            motherLastName={motherLastName}
            setMotherFirstName={setMotherFirstName}
            motherFirstName={motherFirstName}
            setMotherDob={setMotherDob}
            motherDob={motherDob}
            setMotherRegion={setMotherRegion}
            motherRegion={motherRegion}
            setMotherDistrict={setMotherDistrict}
            motherDistrict={motherDistrict}
            setMotherCommune={setMotherCommune}
            motherCommune={motherCommune}
            setMotherFokontany={setMotherFokontany}
            motherFokontany={motherFokontany}
            setMotherUsualRegion={setMotherUsualRegion}
            motherUsualRegion={motherUsualRegion}
            setMotherUsualDistrict={setMotherUsualDistrict}
            motherUsualDistrict={motherUsualDistrict}
            setMotherUsualCommune={setMotherUsualCommune}
            motherUsualCommune={motherUsualCommune}
            setMotherUsualFokontany={setMotherUsualFokontany}
            motherUsualFokontany={motherUsualFokontany}
            setMotherProfession={setMotherProfession}
            motherProfession={motherProfession}
            setMotherNationality={setMotherNationality}
            motherNationality={motherNationality}
          />
        ) : activeStep == 3 ? (
          <FatherInformation
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setFatherNiu={setFatherNiu}
            fatherNiu={fatherNiu}
            setFatherLastName={setFatherLastName}
            fatherLastName={fatherLastName}
            setFatherFirstName={setFatherFirstName}
            fatherFirstName={fatherFirstName}
            setFatherDob={setFatherDob}
            fatherDob={fatherDob}
            setMotherFatherSameAddress={setMotherFatherSameAddress}
            motherFatherSameAddress={motherFatherSameAddress}
            setFatherProfession={setFatherProfession}
            fatherProfession={fatherProfession}
            setFatherRegion={setFatherRegion}
            fatherRegion={fatherRegion}
            setFatherDistrict={setFatherDistrict}
            fatherDistrict={fatherDistrict}
            setFatherCommune={setFatherCommune}
            fatherCommune={fatherCommune}
            setFatherFokontany={setFatherFokontany}
            fatherFokontany={fatherFokontany}
            setFatherUsualRegion={setFatherUsualRegion}
            fatherUsualRegion={fatherUsualRegion}
            setFatherUsualDistrict={setFatherUsualDistrict}
            fatherUsualDistrict={fatherUsualDistrict}
            setFatherUsualCommune={setFatherUsualCommune}
            fatherUsualCommune={fatherUsualCommune}
            setFatherUsualFokontany={setFatherUsualFokontany}
            fatherUsualFokontany={fatherUsualFokontany}
          />
        ) : activeStep == 4 ? (
          <DeclarantInformation
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setDeclarantLink={setDeclarantLink}
            declarantLink={declarantLink}
            setDeclarantNiu={setDeclarantNiu}
            declarantNiu={declarantNiu}
            setDeclarantLastName={setDeclarantLastName}
            declarantLastName={declarantLastName}
            setDeclarantFirstName={setDeclarantFirstName}
            declarantFirstName={declarantFirstName}
            setDeclarantDob={setDeclarantDob}
            declarantDob={declarantDob}
            setDeclarantAddress={setDeclarantAddress}
            declarantAddress={declarantAddress}
          />
        ) : (
          <RegistrationCertificates
            onNextClick={onNextClick}
            onPrevClick={onPrevClick}
            setRegistry={setRegistry}
            registry={registry}
            setCertificate={setCertificate}
            certificate={certificate}
          />
        )}
      </div>
    </div>
  );
}
