import ReactSelect from "react-select";
import TableEntryText from "./TableEntryText";
import TableEntryStatus from "./TableEntryStatus";
import { MoreVertical, FileText } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Registerations() {
  const options = [{ label: "Last Week", value: "Last Week" }];
  return (
    <div className="list__container">
      <div className="list__container__top">
        <div style={{ fontSize: "18px", fontWeight: "600" }}>Registrations</div>
        {/* <div className="list__container__top__select">
          <ReactSelect
            options={options}
            placeholder="Last Week"
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary75: "#0ACF66",
                primary25: "#0ACF66e",
                primary50: "#0ACF66e",
                primary: "#0ACF66",
              },
            })}
            styles={{
              control: (base, state) => ({
                ...base,
                "&:hover": { borderColor: "#0ACF66" }, // border style on hover
                border: "1px solid transparent", // default border color
                boxShadow: "none", // no box-shadow
                borderRadius: "20px",
                marginRight: "0.5em",
                background: "var(--backgroundColor)",
                width: "150px",
                fontSize: "12px",
              }),
            }}
          />
        </div> */}
      </div>
      <div className="container__main__content__listing__table">
        <div className="container__main__content__listing__table__header">
          <div className="container__main__content__listing__table__header__entry">
            No
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Child Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Mother Name
          </div>
          <div className="container__main__content__listing__table__header__entry">
            DOB
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Address
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Attached Files
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Status
          </div>
          <div className="container__main__content__listing__table__header__entry">
            Actions
          </div>
        </div>
        <div className="container__main__content__listing__table__content">
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
          <TableEntry />
        </div>
      </div>
    </div>
  );
}

function TableEntry() {
  const navigate = useNavigate();
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText
        onClick={() => navigate("/dashboard/registrationdetail")}
        style={{ cursor: "pointer" }}
      >
        987
      </TableEntryText>
      <TableEntryText>john</TableEntryText>
      <TableEntryText>tessa</TableEntryText>
      <TableEntryText>23/7/21</TableEntryText>
      <TableEntryText>west</TableEntryText>
      <div className="container__main__content__listing__table__content__list__entry">
        <FileText size={15} style={{ cursor: "pointer" }} />
      </div>
      <TableEntryStatus>Unverified</TableEntryStatus>
      <div className="container__main__content__listing__table__content__list__entry">
        <MoreVertical style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
