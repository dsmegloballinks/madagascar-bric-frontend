import ReactSelect from "react-select";
import TableEntryText from "./TableEntryText";
import TableEntryStatus from "./TableEntryStatus";
import { MoreVertical, FileText } from "react-feather";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Pagination from "react-js-pagination";

export default function Registerations({
  dataList,
  page,
  limit,
  totalRecords,
  handlePageChange,
}) {
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
          {dataList.map((item) => (
            <TableEntry item={item} />
          ))}
        </div>
        {dataList.length > 0 && (
          <div className="list__container__pagination">
            <Pagination
              activePage={page}
              itemsCountPerPage={limit}
              totalItemsCount={totalRecords}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function TableEntry({ item }) {
  const navigate = useNavigate();
  const viewFiles = (files) => {
    files.map((i) =>
      window.open(
        "https://docs.google.com/gview?embedded=true&url=" +
          import.meta.env.VITE_BASE_URL.concat(i.name)
      )
    );
  };
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText
        onClick={() =>
          navigate("/dashboard/registrationdetail", {
            state: {
              registrationData: item,
            },
          })
        }
        style={{ cursor: "pointer" }}
        className="container__main__content__listing__table__content__list__entry__hover"
      >
        987
      </TableEntryText>
      <TableEntryText>{item.given_name}</TableEntryText>
      <TableEntryText>tessa</TableEntryText>
      <TableEntryText>
        {moment(item.date_of_birth).format("DD MMM, YYYY")}
      </TableEntryText>
      <TableEntryText>west</TableEntryText>
      <div className="container__main__content__listing__table__content__list__entry">
        <FileText
          size={15}
          style={{ cursor: "pointer" }}
          onClick={() => viewFiles()}
        />
      </div>
      <TableEntryStatus>
        {item.status == 0 ? "Unverified" : "Verified"}
      </TableEntryStatus>
      <div className="container__main__content__listing__table__content__list__entry">
        <MoreVertical style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}
