import TableEntryText from "./TableEntryText";
import { MoreVertical, Search } from "react-feather";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState, useRef, useEffect, useMemo } from "react";
import ViewFiles from "./ViewFiles";
import Loader from "./Loader";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

export default function Registerations({
  dataList,
  totalRecords,
  handlePageChange,
  onAddressViewClick,
  isLoading,
  setFilterText,
  filterText,
  setPage,
  onChangeRowsPerPage,
}) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [fileViewVisibility, setFileViewVisibility] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  let [hoveredItem, setHoveredItem] = useState("");

  const ref = useRef(null);
  const [isFileActionHover, setIsFileActionHover] = useState(false);

  /* `subHeaderComponentMemo` is a memoized component that renders a search bar. It is used as the
`subHeaderComponent` prop in the `DataTable` component. The `useMemo` hook is used to memoize the
component so that it only re-renders when the `filterText` state changes. This helps to optimize
performance by preventing unnecessary re-renders of the component. */
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div style={{ display: "flex" }}>
        <div className="list__search__wrapper">
          <input
            type="text"
            placeholder={t("search")}
            onChange={(e) => {
              setPage(1);
              setFilterText(e.target.value);
            }}
            value={filterText}
          />
          <Search size={19} className="list__search__wrapper__icon" />
        </div>
      </div>
    );
  }, [filterText]);

  /**
   * The function opens a new window with a URL based on the input file path.
   */
  const viewFiles = (files) => {
    window.open(import.meta.env.VITE_BASE_URL.concat(files));
  };

  /**
   * The function sets the state of "isFileActionHover" to false when an outside click event occurs.
   */
  const onClickOutside = () => {
    setIsFileActionHover(false);
  };

  /* This `useEffect` hook is setting up an event listener on the document that listens for clicks
 outside of a specific element (referenced by the `ref` variable). When a click occurs outside of
 this element, the `onClickOutside` function is called. The `useEffect` hook returns a cleanup
 function that removes the event listener when the component unmounts. The `onClickOutside` function
 is passed as a dependency to the `useEffect` hook, which means that the effect will re-run whenever
 `onClickOutside` changes. */
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

  /* `const columns` is an array of objects that defines the columns of a table. Each object represents
  a column and has properties such as `name` (the name of the column), `selector` (a function that
  selects the data for the column from each row of the table), `cell` (a function that renders the
  content of the cell for the column), and `sortable` (a boolean that indicates whether the column
  is sortable). The table is rendered using the `DataTable` component from the
  `react-data-table-component` library, and the `columns` array is passed as a prop to this
  component. */
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
      name: t("child_name"),
      selector: (row) => row.cr.first_name,
      format: (row) => row.cr.first_name + " " + row.cr.last_name,
      sortable: true,
    },
    {
      name: t("mother_name"),
      selector: (row) => row.mother.given_name,
      format: (row) => row.mother.given_name + " " + row.mother.last_name,
    },
    {
      name: t("dob"),
      selector: (row) => row.cr.date_of_birth,
      format: (row) =>
        moment(row.cr.date_of_birth).subtract(1, "day").format("DD MMM, YYYY"),
    },
    {
      name: t("commune") + ", " + t("fokontany"),
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
      name: t("office_address"),
      selector: (row) => row.input_type,
      cell: (row) => (
        <TableEntryText
          className="container__main__content__listing__table__content__list__entry__hover"
          onClick={() => onAddressViewClick(row.cr)}
          id={row.id}
        >
          {t("view")}
        </TableEntryText>
      ),
    },
    {
      name: t("attached_files"),
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
                  {t("registered_pic")}
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
                <div className="action__wrapper__content">{t("bith_cert")}</div>
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  /* `customStyles` is an object that defines custom styles for the `DataTable` component. In this case,
it sets the font size to 14px and font weight to bold for the header cells of the table. These
styles will be applied to the table when the `customStyles` prop is passed to the `DataTable`
component. */
  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },
  };

  return (
    <>
      <div className="list__container">
        <div className="list__container__top">
          <div
            style={{
              fontSize: "18px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            {t("form_submit")}
          </div>
        </div>
        <div className="container__main__content__listing__table">
          <div className="container__main__content__listing__table__content">
            <DataTable
              columns={columns}
              data={dataList}
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
              noDataComponent={t("noData")}
              onChangeRowsPerPage={(e) => {
                onChangeRowsPerPage(e);
              }}
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
