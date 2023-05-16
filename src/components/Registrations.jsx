import TableEntryText from "./TableEntryText";
import { MoreVertical, Search } from "react-feather";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState, useRef, useEffect, useMemo } from "react";
import ViewFiles from "./ViewFiles";
import Loader from "./Loader";
import DataTable from "react-data-table-component";

export default function Registerations({
  dataList,
  totalRecords,
  handlePageChange,
  onAddressViewClick,
  isLoading,
}) {
  const navigate = useNavigate();
  const [fileViewVisibility, setFileViewVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  let [hoveredItem, setHoveredItem] = useState("");

  const ref = useRef(null);
  const [isFileActionHover, setIsFileActionHover] = useState(false);
  const [filterText, setFilterText] = useState("");
  const filteredItems = dataList.filter(
    (item) =>
      item.cr.first_name &&
      item.cr.first_name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div style={{ display: "flex" }}>
        <div className="list__search__wrapper">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
          <Search size={19} className="list__search__wrapper__icon" />
        </div>
      </div>
    );
  }, [filterText]);

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

  const columns = [
    {
      name: "NIU",
      selector: (row) => row.file.split("_")[3],
      cell: (row) => (
        <div
          className="container__main__content__listing__table__content__list__entry__hover"
          id={row.id}
          onClick={() =>
            navigate("/dashboard/registrationdetail", {
              state: {
                registrationData: row,
              },
            })
          }
          style={{ cursor: "pointer" }}
        >
          {row.cr.uin}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Child Name",
      selector: (row) => row.cr.first_name,
      format: (row) => row.cr.first_name + " " + row.cr.last_name,
      sortable: true,
    },
    {
      name: "Mother Name",
      selector: (row) => row.mother.given_name,
      format: (row) => row.mother.given_name + " " + row.mother.last_name,
    },
    {
      name: "DOB",
      selector: (row) => row.cr.date_of_birth,
      format: (row) =>
        moment(row.cr.date_of_birth).subtract(1, "day").format("DD MMM, YYYY"),
    },
    {
      name: "Commune, Fokontany",
      selector: (row) => row.foko.commune_name,
      cell: (row) => (
        <div
          className="container__main__content__listing__table__content__list__entry"
          id={row.id}
        >
          <TableEntryText className="container__main__content__listing__table__content__list__entry__hover">
            {row.foko.commune_name}
          </TableEntryText>
          <TableEntryText className="container__main__content__listing__table__content__list__entry__hover">
            {row.foko.fokontonay_name}
          </TableEntryText>
        </div>
      ),
    },
    {
      name: "Office Address",
      selector: (row) => row.input_type,
      cell: (row) => (
        <TableEntryText
          className="container__main__content__listing__table__content__list__entry__hover"
          onClick={() => onAddressViewClick(row.cr)}
          id={row.id}
        >
          view
        </TableEntryText>
      ),
    },
    {
      name: "Attached Files",
      selector: (row) => row.input_type,
      cell: (row, index) => (
        <div
          className="container__main__content__listing__table__content__list__entry"
          id={row.id}
          style={{ position: "relative" }}
          ref={ref}
          onMouseOut={() => {
            setHoveredItem((hoveredItem = ""));
            setIsFileActionHover(false);
          }}
          onMouseOver={() => {
            setHoveredItem((hoveredItem = index));
            setIsFileActionHover(true);
          }}
        >
          <MoreVertical
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedUser(row);
              setFileViewVisibility(true);
            }}
          />
          {isFileActionHover && hoveredItem == index && (
            <div className="action__wrapper">
              <div
                className="action__wrapper__item"
                onClick={() => viewFiles(row.cr.picture_register)}
              >
                <img
                  src={import.meta.env.VITE_BASE_URL.concat(
                    row.cr.picture_register
                  )}
                  className="action__wrapper__img"
                />
                <div className="action__wrapper__content">
                  Registered Picture
                </div>
              </div>
              <div
                className="action__wrapper__item"
                onClick={() => viewFiles(row.cr.pic_certificate)}
              >
                <img
                  src={import.meta.env.VITE_BASE_URL.concat(
                    row.cr.pic_certificate
                  )}
                  className="action__wrapper__img"
                />
                <div className="action__wrapper__content">
                  Birth Certificate
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
  };

  return (
    <>
      <div className="list__container">
        <div className="list__container__top">
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            Form Submission
          </div>
        </div>
        <div className="container__main__content__listing__table">
          <div className="container__main__content__listing__table__content">
            <DataTable
              columns={columns}
              data={filteredItems}
              progressPending={isLoading}
              progressComponent={<Loader />}
              pagination
              paginationServer
              paginationTotalRows={totalRecords}
              onChangePage={handlePageChange}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              customStyles={customStyles}
            />
          </div>
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
