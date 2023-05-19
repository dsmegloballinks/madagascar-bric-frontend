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

export default function OdkManagement() {
  const isSuperAdmin = localStorage.getItem("isAdmin");
  const { setAlertPopupVisibility, setAlertPopupMessage, isSidebarHovered } =
    useContext(PopupContext);
  const [isUploadFilePopupOpen, setIsUploadFilePopupOpen] = useState(false);
  const [resetPasswordConfirmationPopup, setResetPasswordConfirmationPopup] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  const [filterText, setFilterText] = useState("");

  let [hoverStyle, setHoverStyle] = useState("");

  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  const filteredItems = list.filter(
    (item) =>
      item.file && item.file.toLowerCase().includes(filterText.toLowerCase())
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

  const columns = [
    {
      name: "File Name",
      selector: (row) => row.file.split("_")[3],
      sortable: true,
    },
    {
      name: "Date of Import",
      selector: (row) => row.date_created,
      format: (row) => moment(row.date_created).format("DD MMM, YYYY"),
      sortable: true,
    },
    {
      name: "Time of Import",
      selector: (row) => row.time_created,
      format: (row) =>
        moment(row.time_created).subtract(4, "hour").format("hh:mm"),
      sortable: true,
    },
    {
      name: "No. of Records",
      selector: (row) => row.number_record,
      sortable: true,
    },
    {
      name: "Import Type",
      selector: (row) => row.input_type,
      sortable: true,
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

  useEffect(() => {
    getLog();
  }, [page]);

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
          setAlertPopupMessage("Some error occurred, please try later");
          setAlertPopupVisibility(true);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
        setAlertPopupMessage("Some error occurred, please try later");
        setAlertPopupVisibility(true);
      });
  };

  const getLog = (msg) => {
    if (!msg) setIsDataLoading(true);
    fileLogGetCall(page, limit, "O")
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

  const handlePageChange = (value) => {
    setPage(value);
  };

  const fetchRecords = () => {
    fetchOdkRecordsGetCall()
      .then(({ data }) => {
        console.log("data", data);
        getLog("msg");
      })
      .catch((err) => {
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
            ODK Record Management
            <Tooltip text="Upload File">
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
            <Tooltip text="Fetch Records">
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
                data={filteredItems}
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
          text={"Are you sure, you want to fetch records?"}
          onYes={fetchRecords}
        />
      )}
    </>
  );
}
