import { useState, useContext, useEffect, useMemo } from "react";
import { Bell, Check, Search, Upload } from "react-feather";
import { Link } from "react-router-dom";
import { PopupContext } from "../../../context/PopupContext";
import {
  communeGetCall,
  registrarGetCall,
  registrationsGetCall,
  uinFilePostCall,
  uinManagmentGetCall,
} from "../../../apis/Repo";
import UploadFileSingle from "@components/UploadFileSingle";
import Loader from "@components/Loader";
import Select from "@components/Select";
import Tooltip from "@components/Tooltip";
import { file } from "../../../assets";
import DataTable from "react-data-table-component";
import moment from "moment";

export default function UINManagement() {
  const isSuperAdmin = localStorage.getItem("isAdmin");
  const { setAlertPopupVisibility, setAlertPopupMessage, isSidebarHovered } =
    useContext(PopupContext);
  const [isUploadFilePopupOpen, setIsUploadFilePopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [selectedTab, setSelectedTab] = useState("All");
  const [communesList, setCommuneList] = useState([]);
  const [commune, setCommune] = useState("");
  const [tackingRecords, setTrackingRecords] = useState(0);

  let [hoverStyle, setHoverStyle] = useState("");

  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  const tabs = [
    { label: "All", value: 1 },
    { label: "Allocated", value: 2 },
    { label: "Not Allocated", value: 0 },
  ];

  useEffect(() => {
    getCommunes();
    getRegistrations();
  }, []);

  useEffect(() => {
    getUINManagement();
  }, [page, commune]);

  const getRegistrations = () => {
    registrationsGetCall(1, 1, "", "", "", "", "", "", 0)
      .then(({ data }) => {
        if (data.data.success) {
          setTrackingRecords(data.data.total_records);
        } else {
          setTrackingRecords(0);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getUINManagement = () => {
    setIsDataLoading(true);
    uinManagmentGetCall(page, limit, commune)
      .then(({ data }) => {
        setIsDataLoading(false);
        if (data.data.success) {
          setList(data.data.result);
          setTotalRecords(data.data.total_records);
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

  const [filterText, setFilterText] = useState("");

  const filteredItems = list.filter(
    (item) =>
      item.uin && item.uin.toLowerCase().includes(filterText.toLowerCase())
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
      name: "NIU",
      selector: (row) => row.uin,
      sortable: true,
    },
    {
      name: "Allocated Commune",
      selector: (row) => row.commune,

      sortable: true,
    },
    {
      name: "Allocation Date",
      selector: (row) => row.date_created,
      format: (row) =>
        row.allocation_date
          ? moment(row.date_created).format("DD MMM, YYYY")
          : "---",
      sortable: true,
    },
    {
      name: "Allocation Time",
      selector: (row) => row.allocation_time,
      format: (row) =>
        row.allocation_time
          ? moment(row.allocation_time).subtract(6, "hour").format("hh:mm")
          : "---",
      sortable: true,
    },
    {
      name: "NIU Status",
      selector: (row) => row.niu_status,
      cell: (row) => (
        <div
          className="container__main__content__listing__table__content__list__entry"
          id={row.id}
        >
          {row.niu_status == 1 ? <Check color="#0acf66" /> : null}
        </div>
      ),
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

  const uploadFile = (file) => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("input_type", "file");
    bodyFormData.append("module_type", "UIN");
    bodyFormData.append("number_records", "50");
    setIsLoading(true);
    uinFilePostCall(bodyFormData)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.message == "File uploaded successfully") {
          setIsUploadFilePopupOpen(false);
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

  const handlePageChange = (value) => {
    setPage(value);
  };

  const getCommunes = () => {
    let newArray = [];
    communeGetCall()
      .then(({ data }) => {
        if (data.data.success) {
          for (let index = 0; index < data.data.result.length; index++) {
            const element = data.data.result[index];
            let object = {
              value: index + 1,
              label: element,
            };
            newArray.push(object);
          }
          setCommuneList(newArray);
        }
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
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.4713 8.08949C12.4713 7.98198 12.4713 7.92824 12.4713 7.84761C12.4713 6.90697 12.4713 5.96633 12.4713 5.02569C12.4713 4.56881 12.2026 4.30006 11.7457 4.30006C9.48815 4.30006 7.23062 4.30006 4.99996 4.30006C4.56995 4.30006 4.27432 4.56881 4.27432 5.02569C4.27432 6.96072 4.27432 8.89575 4.27432 10.8039C4.27432 11.2608 4.56995 11.5295 4.99996 11.5295C6.74686 11.5295 8.46689 11.5295 10.2138 11.5295C10.2944 11.5295 10.3482 11.5295 10.4288 11.5295C10.5094 13.8677 11.6651 15.3458 13.9226 15.9909C13.5732 16.3402 13.1432 16.5552 12.6594 16.6627C10.9663 17.0121 9.46127 15.749 9.46127 14.0289C9.46127 13.8946 9.46127 13.7602 9.46127 13.6258C9.46127 13.3839 9.3269 13.2496 9.08502 13.2496C9.03127 13.2496 8.97752 13.2496 8.92377 13.2496C6.82749 13.2496 4.75808 13.2496 2.6618 13.2496C2.58117 13.2496 2.50055 13.2496 2.41992 13.2496C2.41992 13.1689 2.41992 13.1152 2.41992 13.0346C2.41992 8.89575 2.41992 4.78382 2.41992 0.645008C2.41992 0.188126 2.60805 0 3.06493 0C6.74686 0 10.4288 0 14.1107 0C14.5407 0 14.7557 0.188126 14.7557 0.645008C14.7557 2.84879 14.7557 5.0257 14.7557 7.22948C14.7557 7.39073 14.7289 7.4176 14.5676 7.44448C13.8957 7.47135 13.2776 7.65948 12.6863 7.98199C12.6326 8.00886 12.5788 8.06261 12.4713 8.08949ZM9.81065 1.9619C10.0525 1.9619 10.2675 1.9619 10.5094 1.9619C11.0738 1.9619 11.6113 1.9619 12.1757 1.9619C12.4176 1.9619 12.5519 1.80065 12.4982 1.58565C12.4444 1.42439 12.3101 1.37064 12.1488 1.37064C10.6169 1.37064 9.05814 1.37064 7.52625 1.37064C7.4725 1.37064 7.44562 1.37064 7.39187 1.37064C7.23062 1.39751 7.17687 1.50502 7.14999 1.63939C7.14999 1.80064 7.23062 1.90815 7.36499 1.93502C7.41874 1.93502 7.49937 1.93502 7.58 1.93502C8.30563 1.9619 9.05814 1.9619 9.81065 1.9619ZM10.9125 3.11754C11.3157 3.11754 11.7188 3.11754 12.1488 3.11754C12.2832 3.11754 12.4176 3.06379 12.4713 2.92942C12.5519 2.71441 12.4176 2.52629 12.1488 2.52629C11.3426 2.52629 10.5094 2.52629 9.70315 2.52629C9.48815 2.52629 9.35377 2.63379 9.35377 2.82192C9.35377 2.98317 9.48815 3.11754 9.70315 3.11754C10.1063 3.11754 10.5094 3.11754 10.9125 3.11754Z" />
              <path d="M14.7814 8.03516C16.8239 8.03516 18.4902 9.70143 18.5171 11.7708C18.5171 13.8402 16.8508 15.5065 14.8083 15.5065C12.7657 15.5065 11.0726 13.8402 11.0726 11.7708C11.0457 9.70143 12.712 8.03516 14.7814 8.03516ZM13.4645 13.9209C13.572 13.8134 13.6795 13.7596 13.7601 13.679C14.3783 12.819 14.9964 11.959 15.6145 11.0721C15.8564 10.7496 16.0983 10.4271 16.3133 10.0777C16.4208 9.94331 16.3939 9.75518 16.2595 9.67456C16.1252 9.59393 15.9639 9.6208 15.8564 9.75518C15.8295 9.78205 15.8027 9.80893 15.8027 9.8358C15.2383 10.6152 14.6739 11.3946 14.1095 12.2008C13.8139 12.604 13.5451 12.9802 13.2495 13.4102C13.1957 13.4909 13.1957 13.6252 13.2226 13.7059C13.2495 13.7865 13.3839 13.8402 13.4645 13.9209ZM13.5989 11.3408C14.1633 11.3408 14.5933 10.9108 14.5933 10.3464C14.5933 9.78206 14.1364 9.35205 13.572 9.35205C13.0345 9.35205 12.5776 9.80893 12.6045 10.3464C12.6045 10.9108 13.0345 11.3408 13.5989 11.3408ZM15.937 12.174C15.3726 12.174 14.9426 12.604 14.9426 13.1684C14.9426 13.7327 15.3726 14.1627 15.937 14.1627C16.5014 14.1627 16.9314 13.7327 16.9045 13.1684C16.9314 12.604 16.5014 12.174 15.937 12.174Z" />
              <path d="M0 13.8672C2.98317 13.8672 5.88571 13.8672 8.842 13.8672C8.842 14.4047 8.92263 14.9422 9.13763 15.4528C9.37951 15.9635 9.70202 16.3666 10.1589 16.7429C10.1051 16.7429 10.0514 16.7429 9.99765 16.7429C7.57886 16.7429 5.16008 16.7429 2.76817 16.7429C1.4244 16.7429 0.376256 15.9366 0.107502 14.6466C0.0268754 14.4047 0.0268754 14.1628 0 13.8672Z" />
              <path d="M9.4878 6.58398C9.4878 6.93336 9.4878 7.28274 9.4878 7.63212C7.9559 7.63212 6.39713 7.63212 4.86523 7.63212C4.86523 7.28274 4.86523 6.93336 4.86523 6.58398C6.39713 6.58398 7.92903 6.58398 9.4878 6.58398Z" />
              <path d="M9.48648 9.29963C9.40585 9.29963 9.3521 9.29963 9.29835 9.29963C7.90083 9.29963 6.47643 9.29963 5.07891 9.29963C4.89079 9.29963 4.83704 9.24588 4.86391 9.05775C4.89079 8.78899 4.86391 8.52024 4.86391 8.22461C6.42268 8.22461 7.95458 8.22461 9.51335 8.22461C9.48648 8.60086 9.48648 8.95024 9.48648 9.29963Z" />
              <path d="M9.48733 9.9175C9.48733 10.2669 9.48733 10.5894 9.48733 10.9656C9.40671 10.9656 9.35296 10.9656 9.27233 10.9656C7.87481 10.9656 6.50416 10.9656 5.10664 10.9656C4.83789 10.9656 4.83789 10.9656 4.83789 10.6969C4.83789 10.4819 4.83789 10.24 4.83789 10.025C4.83789 9.94438 4.86477 9.89062 4.97227 9.89062C6.45041 9.89062 7.95544 9.89062 9.43358 9.89062C9.43358 9.89062 9.46046 9.89063 9.48733 9.9175Z" />
              <path d="M9.4878 5.96564C7.9559 5.96564 6.42401 5.96564 4.86523 5.96564C4.86523 5.64314 4.86523 5.34751 4.86523 5.025C4.86523 4.89062 4.97274 4.89062 5.08024 4.89062C5.51024 4.89062 5.94025 4.89062 6.37026 4.89062C7.33777 4.89062 8.30528 4.89062 9.2728 4.89062C9.35342 4.89062 9.40717 4.89062 9.4878 4.89062C9.4878 5.24001 9.4878 5.58939 9.4878 5.96564Z" />
              <path d="M10.1055 6.55664C10.6967 6.55664 11.288 6.55664 11.8792 6.55664C11.8792 6.90602 11.8792 7.2554 11.8792 7.60478C11.288 7.60478 10.6967 7.60478 10.1055 7.60478C10.1055 7.28227 10.1055 6.9329 10.1055 6.55664Z" />
              <path d="M10.107 4.89062C10.6713 4.89062 11.2088 4.89062 11.7464 4.89062C11.8001 4.89062 11.8807 4.97125 11.8807 5.025C11.8807 5.32063 11.8807 5.64314 11.8807 5.96564C11.2626 5.96564 10.6982 5.96564 10.0801 5.96564C10.107 5.61626 10.107 5.26688 10.107 4.89062Z" />
              <path d="M10.1055 8.25C10.6967 8.25 11.288 8.25 11.8792 8.25C11.9061 8.41125 11.9061 8.57251 11.7717 8.68001C11.6105 8.84126 11.4761 9.02939 11.3149 9.19064C11.288 9.24439 11.2342 9.29814 11.1805 9.29814C10.8311 9.29814 10.4817 9.29814 10.1055 9.29814C10.1055 8.94876 10.1055 8.59938 10.1055 8.25Z" />
              <path d="M10.8311 9.91797C10.7236 10.2405 10.643 10.563 10.5355 10.8855C10.5355 10.9124 10.4548 10.9661 10.428 10.9661C10.3205 10.9661 10.213 10.9661 10.1055 10.9661C10.1055 10.6167 10.1055 10.2673 10.1055 9.91797C10.3473 9.91797 10.5892 9.91797 10.8311 9.91797Z" />
              <path d="M13.5999 9.94336C13.8418 9.94336 14.0031 10.1046 14.0031 10.3196C14.0031 10.5615 13.8418 10.7496 13.5999 10.7496C13.3849 10.7496 13.1699 10.5615 13.1699 10.3465C13.1968 10.1315 13.358 9.94336 13.5999 9.94336Z" />
              <path d="M15.5352 13.1707C15.5352 12.9557 15.7233 12.7676 15.9383 12.7676C16.1533 12.7676 16.3683 12.9557 16.3683 13.1707C16.3683 13.3857 16.1802 13.5738 15.9652 13.5738C15.7233 13.5738 15.5352 13.4126 15.5352 13.1707Z" />
            </svg>
            NIU Management
            <Tooltip text="View History">
              <Link
                className="action__buttons"
                to={"/dashboard/uin-management/detail"}
                style={{ background: "var(--update)" }}
              >
                <img src={file} width={"60%"} />
              </Link>
            </Tooltip>
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
            <Tooltip text="NIU Tracking">
              <Link className="bell__wrapper" to={"/dashboard/uin-tracking"}>
                <div className="bell__wrapper__count">{tackingRecords}</div>
                <Bell style={{ marginLeft: ".5em" }} />
              </Link>
            </Tooltip>
          </div>
        </div>
        <div className="details__container">
          <div className="error__types__container__wrapper">
            <div style={{ display: "flex" }}>
              {tabs.map((item) => (
                <div
                  className={
                    selectedTab == item.label
                      ? "tab__content__active"
                      : "tab__content"
                  }
                  onClick={() => setSelectedTab(item.label)}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <div>
              <Select
                widthProp={"180px"}
                placeholder={"Commune"}
                options={communesList}
                onChange={(e) => setCommune(e)}
              />
            </div>
          </div>
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
    </>
  );
}
