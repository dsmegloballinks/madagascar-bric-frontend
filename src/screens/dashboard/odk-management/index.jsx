import React, { useState, useContext, useEffect } from "react";
import { Plus, Search } from "react-feather";
import { Link } from "react-router-dom";
import TableEntryText from "@components/TableEntryText";
import { PopupContext } from "../../../context/PopupContext";
import {
  fileLogGetCall,
  filePostCall,
  uinFilePostCall,
} from "../../../apis/Repo";
import UploadFileSingle from "@components/UploadFileSingle";
import SimpleConfirmationPopup from "@components/SimpleConfirmationPopup";
import Loader from "@components/Loader";
import Pagination from "react-js-pagination";
import moment from "moment";

export default function OdkManagement() {
  const { setAlertPopupVisibility, setAlertPopupMessage } =
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

  useEffect(() => {
    getLog();
  }, [page]);

  const uploadFile = (file) => {
    var bodyFormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append("input_type", "file");
    bodyFormData.append("module_type", "ODK");
    bodyFormData.append("number_records", "50");
    setIsLoading(true);
    uinFilePostCall(bodyFormData)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.message == "File uploaded successfully") {
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

  return (
    <>
      <div className="dashboard__container">
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
          </div>
          <div style={{ display: "flex" }}>
            <div className="list__search__wrapper">
              <input type="text" placeholder="Search" />
              <Search size={19} className="list__search__wrapper__icon" />
            </div>
            <button
              className="details__print"
              style={{ marginRight: ".5em" }}
              onClick={() => setResetPasswordConfirmationPopup(true)}
            >
              Fetch Records
            </button>
            <button
              className="details__print"
              onClick={() => setIsUploadFilePopupOpen(true)}
            >
              <Plus size={15} color="white" style={{ marginRight: ".5em" }} />
              Upload File
            </button>
          </div>
        </div>
        <div className="details__container">
          <div className="container__main__content__listing__table">
            <div className="container__main__content__listing__table__header">
              <div className="container__main__content__listing__table__header__entry">
                File Name
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Date of Import
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Time of Import
              </div>
              <div className="container__main__content__listing__table__header__entry">
                No. of Records
              </div>
              <div className="container__main__content__listing__table__header__entry">
                Import Type
              </div>
            </div>
            <div className="container__main__content__listing__table__content">
              {isDataLoading ? (
                <Loader />
              ) : list.length > 0 ? (
                list.map((item) => <TableEntry item={item} />)
              ) : null}
            </div>
            {list.length > 0 && (
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
        />
      )}
    </>
  );
}

function TableEntry({ item }) {
  let name = item.file.split("_");
  return (
    <div className="container__main__content__listing__table__content__list">
      <TableEntryText>{name[3]}</TableEntryText>
      <TableEntryText>
        {moment(item.time_created).format("DD MMM, YYYY")}
      </TableEntryText>
      <TableEntryText>
        {moment(item.time_created).subtract(6, "hour").format("hh:mm")}
      </TableEntryText>
      <TableEntryText>{item.number_record}</TableEntryText>
      <TableEntryText>Via {item.input_type}</TableEntryText>
    </div>
  );
}
