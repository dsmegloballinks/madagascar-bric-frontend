import React, { useEffect, useState, useContext } from "react";
import { AlignCenter, Plus } from "react-feather";
import { register } from "@assets";
import GraphView from "@components/GraphView";
import Registerations from "@components/Registrations";
import { useNavigate } from "react-router-dom";
import RegistrationsMapView from "@components/RegistrationsMapView";
import Select from "@components/Select";
import UploadFileSingle from "@components/UploadFileSingle";
import { filePostCall, registrationsGetCall } from "../../apis/Repo";
import { PopupContext } from "../../context/PopupContext";

export default function dashboard() {
  const navigate = useNavigate();
  const { setAlertPopupVisibility } = useContext(PopupContext);
  const [selectedFilter, setSelectedFilter] = useState("Graph");
  const filters = ["Graph", "Map", "List"];
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [dataList, setDataList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isUploadFilePopupOpen, setIsUploadFilePopupOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    getRegistrations();
  }, [page]);

  const getRegistrations = () => {
    registrationsGetCall(page, limit)
      .then(({ data }) => {
        if (data.data.success) {
          setDataList(data.data.result);
          setTotalRecords(data.data.total_records);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const uploadFile = (file) => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", file);
    filePostCall(bodyFormData)
      .then(({ data }) => {
        if (data.error_code == 0) {
          setIsUploadFilePopupOpen(false);
          getRegistrations();
        } else {
          setAlertPopupVisibility(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setAlertPopupVisibility(true);
      });
  };

  const handlePageChange = (value) => {
    setPage(value);
  };

  return (
    <>
      <div className="dashboard__container">
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
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
            Overview
          </div>
          <div
            className="dashboard__banner__button__wrapper"
            style={{ width: "14%", justifyContent: "flex-start" }}
          >
            <button onClick={() => setIsUploadFilePopupOpen(true)}>
              {" "}
              <Plus size={15} /> Upload File
            </button>
          </div>
        </div>
        <div className="dashboard__banner__contianer">
          <div className="dashboard__banner__content">
            <h2>Welcome Back Anna!</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="dashboard__banner__button__wrapper">
            <button onClick={() => navigate("/dashboard/addchild")}>
              {" "}
              <Plus size={15} /> Add a Child
            </button>
          </div>
        </div>
        <div className="dashboard__filters__wrapper">
          <div className="dashboard__filters__container">
            {filters.map((item) => (
              <div
                className={
                  selectedFilter == item
                    ? "dashboard__filter__checked"
                    : "dashboard__filter"
                }
                onClick={() => {
                  setSelectedFilter(item);
                  if (item == "List") getRegistrations();
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard__analytics">
          <div className="dashboard__analytics__container">
            <div className="analytics__icon__wrapper">
              <img src={register} />
            </div>
            <div className="dashboard__analytics__container__top">
              <div className="dashboard__analytics__container__top__number">
                23,345,00
              </div>
              <div>Total Registered Child</div>
            </div>
          </div>
          <div
            className="dashboard__analytics__container"
            style={{ background: "var(--primary)" }}
          >
            <div
              className="analytics__icon__wrapper"
              style={{ background: "#00E76C" }}
            >
              <img src={register} />
            </div>
            <div
              className="dashboard__analytics__container__top"
              style={{ borderBottomColor: "#E2E2E2" }}
            >
              <div className="dashboard__analytics__container__top__number">
                23,345,00
              </div>
              <div>Last Week Registered Child</div>
            </div>
          </div>
          <div
            className="dashboard__analytics__container"
            style={{ background: "#9e2686", color: "white" }}
          >
            <div
              className="analytics__icon__wrapper"
              style={{ background: "#cf78bd" }}
            >
              <img src={register} />
            </div>
            <div
              className="dashboard__analytics__container__top"
              style={{ borderBottomColor: "#E2E2E2" }}
            >
              <div className="dashboard__analytics__container__top__number">
                23,345,00
              </div>
              <div>Last Month Registered Child</div>
            </div>
          </div>{" "}
          <div
            className="dashboard__analytics__container"
            style={{ background: "#929292" }}
          >
            <div
              className="analytics__icon__wrapper"
              style={{ background: "#4B4B4B" }}
            >
              <img src={register} />
            </div>
            <div
              className="dashboard__analytics__container__top"
              style={{ borderBottomColor: "#E2E2E2" }}
            >
              <div className="dashboard__analytics__container__top__number">
                23,345,00
              </div>
              <div>Last Year Registered Child</div>
            </div>
          </div>
        </div>
        <div className="list__filters__wrapper">
          <input
            type="date"
            style={{ marginRight: ".5em" }}
            className={
              start == ""
                ? "list__filters__input__empty"
                : "list__filters__input"
            }
            onChange={(e) => setStart(e.currentTarget.value)}
          />
          <input
            type="date"
            style={{ marginRight: ".5em" }}
            className={
              end == ""
                ? "list__filters__input__end__empty"
                : "list__filters__input"
            }
            onChange={(e) => setEnd(e.currentTarget.value)}
          />
          <Select placeholder="Region" background="white" widthProp="180px" />
          <Select placeholder="District" background="white" widthProp="180px" />
          <Select placeholder="Commune" background="white" widthProp="180px" />
          <Select
            placeholder="Fokontany"
            background="white"
            widthProp="180px"
          />

          <button
            className="list__filter__button"
            style={{ marginRight: "1em" }}
          >
            Filter
          </button>
          <button
            className="list__filter__button__reset"
            style={{ marginRight: "1em" }}
          >
            Reset
          </button>
        </div>

        {selectedFilter == "Graph" ? (
          <GraphView />
        ) : selectedFilter == "List" ? (
          <Registerations
            dataList={dataList}
            page={page}
            limit={limit}
            totalRecords={totalRecords}
            handlePageChange={handlePageChange}
          />
        ) : (
          <RegistrationsMapView />
        )}
      </div>
      {isUploadFilePopupOpen ? (
        <UploadFileSingle
          onClose={() => setIsUploadFilePopupOpen(false)}
          // onAdd={() => setAlertPopupVisibility(true)}
          onAdd={uploadFile}
        />
      ) : null}
    </>
  );
}
