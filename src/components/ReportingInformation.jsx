import { ArrowLeft, ArrowRight } from "react-feather";

export default function ReportingInformation({
  onNextClick,
  onPrevClick,
  setNumber,
  number,
  setDateOfDeclaration,
  dateOfDeclaration,
  setDateOfTranscriptionDeclaration,
  dateOfTranscriptionDeclaration,
}) {
  return (
    <div className="form__wrapper">
      <div className="form__wrapper__heading">Reporting Information</div>
      <div className="form__wrapper__content">
        Details about your business corporation and shares
      </div>

      <div className="form__bottom">
        <div className="form__bottom__content">Number</div>
        <input
          value={number}
          maxLength={5}
          onChange={(e) => setNumber(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">Date of Declaration</div>
        <input
          type="date"
          value={dateOfDeclaration}
          onChange={(e) => setDateOfDeclaration(e.currentTarget.value)}
        />
      </div>
      <div className="form__bottom">
        <div className="form__bottom__content">
          Date of Transcription of Declaration
        </div>
        <input
          type="date"
          value={dateOfTranscriptionDeclaration}
          onChange={(e) =>
            setDateOfTranscriptionDeclaration(e.currentTarget.value)
          }
        />
      </div>
      {/* <div className="form__bottom">
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
      </div> */}
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
