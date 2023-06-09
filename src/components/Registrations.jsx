import ReactSelect from "react-select";
import TableEntryText from "./TableEntryText";
import TableEntryStatus from "./TableEntryStatus";
import { MoreVertical, FileText } from "react-feather";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Pagination from "react-js-pagination";
import { useState, useRef, useEffect } from "react";
import { logo } from "@assets";
import ViewFiles from "./ViewFiles";
import Loader from "./Loader";

export default function Registerations({
  dataList,
  page,
  limit,
  totalRecords,
  handlePageChange,
  onAddressViewClick,
  isLoading,
}) {
  const options = [{ label: "Last Week", value: "Last Week" }];
  const [fileViewVisibility, setFileViewVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <div className="list__container">
        <div className="list__container__top">
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            Form Submission
          </div>
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
              Coummune, Fokontany
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Office Location
            </div>
            <div className="container__main__content__listing__table__header__entry">
              Attached Files
            </div>
            {/* <div className="container__main__content__listing__table__header__entry">
            Status
          </div> */}
          </div>
          <div className="container__main__content__listing__table__content">
            {isLoading ? (
              <Loader />
            ) : (
              dataList.map((item) => (
                <TableEntry
                  item={item}
                  setFileViewVisibility={setFileViewVisibility}
                  onAddressViewClick={onAddressViewClick}
                  setSelectedUser={setSelectedUser}
                />
              ))
            )}
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
      {fileViewVisibility && (
        <ViewFiles
          onClose={() => setFileViewVisibility(false)}
          selectedUser={selectedUser}
        />
      )}
    </>
  );
}

function TableEntry({
  item,
  setFileViewVisibility,
  onAddressViewClick,
  setSelectedUser,
}) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isFileActionHover, setIsFileActionHover] = useState(false);

  const viewFiles = (files) => {
    window.open(import.meta.env.VITE_BASE_URL.concat(files));
  };

  const onClickOutside = () => {
    setIsFileActionHover(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

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
        {item.cr.uin}
      </TableEntryText>
      <TableEntryText>
        {item.cr.first_name + " " + item.cr.last_name}
      </TableEntryText>
      <TableEntryText>
        {item.mother.given_name + " " + item.mother.last_name}
      </TableEntryText>
      <TableEntryText>
        {moment(item.cr.date_of_birth)
          .subtract(1, "day")
          .format("DD MMM, YYYY")}
      </TableEntryText>
      <div
        className="container__main__content__listing__table__content__list__entry"
        // style={{ flexDirection: "column", display: "flex" }}
      >
        <TableEntryText className="container__main__content__listing__table__content__list__entry__hover">
          {item.foko.commune_name}
        </TableEntryText>
        <TableEntryText className="container__main__content__listing__table__content__list__entry__hover">
          {item.foko.fokontonay_name}
        </TableEntryText>
      </div>
      <TableEntryText
        className="container__main__content__listing__table__content__list__entry__hover"
        onClick={() => onAddressViewClick(item.cr)}
      >
        view
      </TableEntryText>
      <div
        className="container__main__content__listing__table__content__list__entry"
        style={{ position: "relative" }}
        ref={ref}
        onMouseOut={() => setIsFileActionHover(false)}
        onMouseOver={() => {
          setIsFileActionHover(true);
        }}
      >
        <MoreVertical
          style={{ cursor: "pointer" }}
          onClick={() => {
            setSelectedUser(item);
            setFileViewVisibility(true);
          }}
        />
        {isFileActionHover && (
          <div className="action__wrapper">
            <div
              className="action__wrapper__item"
              onClick={() => viewFiles(item.cr.picture_register)}
            >
              <img
                src={import.meta.env.VITE_BASE_URL.concat(
                  item.cr.picture_register
                )}
                className="action__wrapper__img"
              />
              <div className="action__wrapper__content">Registered Picture</div>
            </div>
            <div
              className="action__wrapper__item"
              onClick={() => viewFiles(item.cr.pic_certificate)}
            >
              <img
                src={import.meta.env.VITE_BASE_URL.concat(
                  item.cr.pic_certificate
                )}
                className="action__wrapper__img"
              />
              <div className="action__wrapper__content">Birth Certificate</div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="container__main__content__listing__table__content__list__entry">
        <FileText
          size={15}
          style={{ cursor: "pointer" }}
          // onClick={() => viewFiles()}
        />
      </div> */}
      {/* <TableEntryStatus>
        {item.status == 0 ? "Unverified" : "Verified"}
      </TableEntryStatus> */}
    </div>
  );
}
