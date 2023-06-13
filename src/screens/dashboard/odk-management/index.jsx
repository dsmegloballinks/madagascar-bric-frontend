import { useState, useContext, useEffect, useMemo } from "react";
import { RefreshCcw, Search, Upload } from "react-feather";
import { PopupContext } from "../../../context/PopupContext";
import {
  fetchOdkRecordsGetCall,
  fileLogGetCall,
  filePostCall,
  uinFilePostCall,
} from "../../../apis/Repo";
import UploadFileSingle from "@components/UploadFileSingle";
import SimpleConfirmationPopup from "@components/SimpleConfirmationPopup";
import Loader from "@components/Loader";
import moment from "moment";
import Tooltip from "@components/Tooltip";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

export default function OdkManagement() {
  const { t, i18n } = useTranslation();
  const { setAlertPopupVisibility, setAlertPopupMessage, isSidebarHovered } =
    useContext(PopupContext);
  const [isUploadFilePopupOpen, setIsUploadFilePopupOpen] = useState(false);
  const [resetPasswordConfirmationPopup, setResetPasswordConfirmationPopup] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);

  const [filterText, setFilterText] = useState("");

  let [hoverStyle, setHoverStyle] = useState("");

  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  /* `subHeaderComponentMemo` is a memoized component that renders a search bar for filtering the data in
the table. It uses the `useMemo` hook to memoize the component and only re-render it when the
`filterText` state variable changes. This helps to optimize performance by avoiding unnecessary
re-renders of the component. */

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

  /* `columns` is an array of objects that defines the columns of the table in the ODKManagement
 component. Each object in the array represents a column and has a `name` property that specifies
 the name of the column, a `selector` property that specifies the data field to display in the
 column, and a `sortable` property that specifies whether the column is sortable or not.
 Additionally, some columns have a `format` property that specifies a function to format the data in
 the column. */
  const columns = [
    {
      name: t("file_name"),
      selector: (row) => row.file.split("_")[3],
      sortable: true,
    },
    {
      name: t("import_date"),
      selector: (row) => row.date_created,
      format: (row) => moment(row.date_created).format("DD MMM, YYYY"),
      sortable: true,
    },
    {
      name: t("import_time"),
      selector: (row) => row.time_created,
      format: (row) =>
        moment(row.time_created).subtract(4, "hour").format("hh:mm"),
      sortable: true,
    },
    {
      name: t("no_records"),
      selector: (row) => row.number_record,
      sortable: true,
    },
    {
      name: t("imp_type"),
      selector: (row) => row.input_type == "ODK" ? "ODK Excel File" : row.input_type == "FILE" ? "ODK API" : "OperCRVS",
      sortable: true,
    },
  ];

  /* `customStyles` is an object that defines custom styles for the `DataTable` component. In this case,
 it sets the font size and font weight of the table header cells to 14px and bold, respectively. */
  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },
  };

  /* The `useEffect` hook is used to run the `getLog` function whenever the `page` variable changes.
 This is because the `page` variable is used to determine which page of data to retrieve from the
 server. So, whenever the user navigates to a different page of data, the `getLog` function is
 called to retrieve the appropriate data and update the state with the results. */
  useEffect(() => {
    getLog();
  }, [page, filterText]);

  /**
   * The function uploads a file using FormData and makes a post call to a server, displaying an error
   * message if the call fails.
   */
  const uploadFile = (file) => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", file);
    // bodyFormData.append("input_type", "file");
    // bodyFormData.append("module_type", "ODK");
    // bodyFormData.append("number_records", "50");
    setIsLoading(true);
    filePostCall(bodyFormData)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.error_code == 0) {
          setIsUploadFilePopupOpen(false);
          getLog("msg");
        } else {
          setAlertPopupMessage(t("error"));
          setAlertPopupVisibility(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
        setAlertPopupMessage(t("error"));
        setAlertPopupVisibility(true);
      });
  };

  /**
   * This function retrieves data from a log file and updates the state with the results.
   */
  const getLog = (msg) => {
    if (!msg) setIsDataLoading(true);
    fileLogGetCall(page, limit, "O", filterText)
      .then(({ data }) => {
        setIsDataLoading(false);
        if (data.success) {
          setList(data.result);
          setTotalRecords(data.total_records);
        } else {
          setList([]);
          setTotalRecords(0);
        }
      })
      .catch((err) => {
        setIsDataLoading(false);
        console.log("err", err);
      });
  };

  /**
   * The function `handlePageChange` sets the value of the `page` variable.
   */
  const handlePageChange = (value) => {
    setPage(value);
  };

  /**
   * This function fetches ODK records and logs the data or any errors.
   */
  const fetchRecords = () => {
    fetchOdkRecordsGetCall()
      .then(({ data }) => {
        setResetPasswordConfirmationPopup(false);
        console.log("data", data);
        getLog("msg");
      })
      .catch((err) => {
        setResetPasswordConfirmationPopup(false);
        console.log("err", err);
      });
  };

  return (
    <>
      <div className={hoverStyle}>
        <div className="main__container__top__bar">
          <div className="details__header">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_400_1225)">
                <path
                  d="M13.5 9C11.019 9 9 11.019 9 13.5C9 15.981 11.019 18 13.5 18C15.981 18 18 15.981 18 13.5C18 11.019 15.981 9 13.5 9ZM14.4697 15.5303L12.75 13.8105V11.25H14.25V13.1895L15.5303 14.4697L14.4697 15.5303ZM9.54075 18H0V10.5H8.30925C7.79775 11.3835 7.5 12.4058 7.5 13.5C7.5 15.2948 8.292 16.9005 9.54075 18ZM13.5 7.5C15.2948 7.5 16.9005 8.292 18 9.54075V5.25C18 4.0095 16.9905 3 15.75 3H13.5V1.5C13.5 0.67275 12.8273 0 12 0H6C5.17275 0 4.5 0.67275 4.5 1.5V3H2.25C1.0095 3 0 4.0095 0 5.25V9H9.54075C10.5975 8.06925 11.9812 7.5 13.5 7.5ZM6 1.5H12V3H6V1.5Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_400_1225">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {t("odk_mng")}
            <Tooltip text={t("upload_file")}>
              <button
                className="action__buttons"
                onClick={() => setIsUploadFilePopupOpen(true)}
              >
                <Upload
                  size={15}
                  color="white"
                  style={{ marginRight: "0em" }}
                />
              </button>
            </Tooltip>
            <Tooltip text={t("fetch_rec")}>
              <button
                className="action__buttons"
                style={{ marginRight: ".5em", background: "#333333" }}
                onClick={() => setResetPasswordConfirmationPopup(true)}
              >
                <RefreshCcw
                  size={15}
                  color="white"
                  style={{ marginRight: "0em" }}
                />
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="details__container">
          <div className="container__main__content__listing__table">
            <div className="container__main__content__listing__table__content">
              <DataTable
                columns={columns}
                data={list}
                progressPending={isDataLoading}
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
                  setPage((page = 1));
                  setLimit((limit = e));
                  getLog();
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {isUploadFilePopupOpen && (
        <UploadFileSingle
          onClose={() => setIsUploadFilePopupOpen(false)}
          onAdd={uploadFile}
          isLoading={isLoading}
        />
      )}
      {resetPasswordConfirmationPopup && (
        <SimpleConfirmationPopup
          onClose={() => setResetPasswordConfirmationPopup(false)}
          text={t("fetch_rec_msg")}
          onYes={fetchRecords}
        />
      )}
    </>
  );
}
