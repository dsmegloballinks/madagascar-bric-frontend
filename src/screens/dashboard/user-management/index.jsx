import React, { useState, useEffect, useContext, useMemo } from "react";
import { Edit2, Plus, Search } from "react-feather";
import { Link } from "react-router-dom";
import ConfirmationPopup from "@components/ConfirmationPopup";
import TableEntryUpdateStatus from "@components/TableEntryUpdateStatus";
import SimpleConfirmationPopup from "@components/SimpleConfirmationPopup";
import {
  deleteUser,
  updateUserStatusPostCall,
  usersGetCall,
} from "../../../apis/Repo";
import { PopupContext } from "../../../context/PopupContext";
import Loader from "@components/Loader";
import { passLock } from "../../../assets/index";
import Tooltip from "@components/Tooltip";
import DataTable from "react-data-table-component";
import { useTranslation } from "react-i18next";

export default function UserManagement() {
  const { t, i18n } = useTranslation();
  const { setAlertPopupVisibility, setAlertPopupMessage, isSidebarHovered } =
    useContext(PopupContext);
  const [deletePopupVisibility, setDeletePopupVisibility] = useState(false);
  const [resetPasswordConfirmationPopup, setResetPasswordConfirmationPopup] =
    useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [statusUpdated, setStatusUpdated] = useState(false);
  const [filterText, setFilterText] = useState("");
  let [hoverStyle, setHoverStyle] = useState("dashboard__container");

  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  /* Filtering the `list` array based on the `filterText` value. It checks if the `user_name` property of
each item in the array contains the `filterText` value (ignoring case sensitivity) and returns a new
array with the filtered items. */
  const filteredItems = list.filter(
    (item) =>
      item.user_name &&
      item.user_name.toLowerCase().includes(filterText.toLowerCase())
  );

  /* The above code is creating a React functional component called `subHeaderComponentMemo` using the
`useMemo` hook. This component returns a `div` element containing an input field and a search icon.
The `onChange` event of the input field updates the `filterText` state variable with the current
value of the input field. The `value` of the input field is set to the current value of the
`filterText` state variable. The `useMemo` hook is used to memoize the component and re-render it
only when the `filterText` state variable changes. */
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

  /* The above code is defining an array of objects that represent columns in a table. Each object has a
name, a selector function that selects the data for that column from the row data, and optionally a
cell function that defines how the data should be displayed in the table cell. The first two columns
are sortable, and the third column contains a custom component called TableEntryUpdateStatus that
allows the user to update the status of a row. The fourth column contains two action buttons, one to
reset the user's password and another to edit the user's details. */
  const columns = [
    {
      name: t("username"),
      selector: (row) => row.user_name,
      sortable: true,
    },
    {
      name: t("email"),
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: t("status"),
      selector: (row) => row.status,
      cell: (row) => (
        <TableEntryUpdateStatus
          id={row.id}
          children={row.status}
          onChangeStatus={(data) => updateStatus(data, row)}
          statusUpdated={statusUpdated}
        />
      ),
      sortable: true,
    },
    {
      name: t("action"),
      selector: (row) => row.year,
      cell: (row) => (
        <div
          className="container__main__content__listing__table__content__list__entry"
          id={row.id}
        >
          <Tooltip text={t("reset_pass")}>
            <div
              className="container__main__content__listing__table__content__list__entry__action__edit"
              style={{ marginRight: ".5em", background: "#de8f21" }}
              onClick={() => setResetPasswordConfirmationPopup(true)}
            >
              <img src={passLock} width={"120%"} />
            </div>
          </Tooltip>
          <Tooltip text={t("edit_user")}>
            <Link
              className="container__main__content__listing__table__content__list__entry__action__edit"
              style={{ marginRight: ".5em" }}
              to={"/dashboard/user-management/edit"}
              state={row}
            >
              <Edit2 size={18} />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  const customStyles = {
    // rows: {
    //   style: {
    //     minHeight: "72px", // override the row height
    //   },
    // },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    // cells: {
    //   style: {
    //     paddingLeft: "8px", // override the cell padding for data cells
    //     paddingRight: "8px",
    //   },
    // },
  };

  useEffect(() => {
    getUsers();
  }, [page, filterText]);

  /**
   * This function retrieves a list of users and updates the state with the results.
   */
  const getUsers = () => {
    setIsLoading(true);
    usersGetCall(page, limit, filterText)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.success) {
          setList(data.result);
          setTotalRecords(data.total_records);
        } else {
          setList([]);
          setTotalRecords(0);
        }
      })
      .catch((err) => {
        setIsLoading(false);
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
   * The function deletes a user from a list and updates the state accordingly, while also displaying
   * error messages if necessary.
   */
  const onDelete = () => {
    let object = {
      user_id: selectedItem.user_id,
    };
    deleteUser(object)
      .then(({ data }) => {
        if (data.data.success) {
          let newArray = [...list];
          newArray = newArray.filter(
            (element) => element.user_id !== selectedItem.user_id
          );
          setList(newArray);
          setSelectedItem(null);
          setDeletePopupVisibility(false);
        } else {
          setAlertPopupMessage(t("error"));
          setAlertPopupVisibility(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setAlertPopupMessage(t("error"));
        setAlertPopupVisibility(true);
      });
  };

  /**
   * This function updates the status of a user and displays a success or error message based on the
   * response from the server.
   */
  const updateStatus = (status, item) => {
    let object = {
      status: status.value,
      user_id: item.user_id,
    };
    updateUserStatusPostCall(object)
      .then(({ data }) => {
        if (data.success) {
          setAlertPopupMessage(t("success"));
          setAlertPopupVisibility(true);
        } else {
          setStatusUpdated(!statusUpdated);
          setAlertPopupMessage(t("error"));
          setAlertPopupVisibility(true);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setStatusUpdated(!statusUpdated);
        setAlertPopupMessage(t("error"));
        setAlertPopupVisibility(true);
      });
  };

  return (
    <>
      <div className={hoverStyle}>
        <div className="main__container__top__bar">
          <div className="details__header">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.9994 16.5073C17.8725 16.8119 17.644 16.9135 17.314 16.8881C15.9684 16.8881 14.6228 16.8881 13.3027 16.8881C12.9218 16.8881 12.6934 16.685 12.6934 16.3042C12.6934 14.9332 12.6934 13.5877 12.6934 12.2167C12.6934 11.8359 12.8965 11.6328 13.3027 11.6328C14.6482 11.6328 15.9938 11.6328 17.3393 11.6328C17.6694 11.6328 17.8725 11.7344 17.9994 12.0136C17.9994 13.5115 17.9994 15.0094 17.9994 16.5073Z" />
              <path d="M0 14.2458C0 13.5603 0 12.8749 0 12.2148C0 11.834 0.203104 11.6055 0.583922 11.6055C1.95487 11.6055 3.32581 11.6055 4.72215 11.6055C5.10296 11.6055 5.30606 11.8086 5.30606 12.2148C5.30606 13.5857 5.30606 14.9313 5.30606 16.3022C5.30606 16.7084 5.10296 16.9115 4.69676 16.9115C3.32581 16.9115 1.98025 16.9115 0.609309 16.9115C0.203103 16.9115 0 16.7084 0 16.3022C0 15.5914 0 14.9313 0 14.2458Z" />
              <path d="M8.98799 11.6055C9.67346 11.6055 10.3589 11.6055 11.0444 11.6055C11.4252 11.6055 11.6283 11.8086 11.6283 12.1894C11.6283 13.5603 11.6283 14.9059 11.6283 16.2768C11.6283 16.6577 11.4252 16.8608 11.019 16.8608C9.64808 16.8608 8.30252 16.8608 6.93158 16.8608C6.52537 16.8608 6.32227 16.6577 6.32227 16.2514C6.32227 14.8805 6.32227 13.5349 6.32227 12.164C6.32227 11.7832 6.52537 11.5801 6.93158 11.5801C7.61705 11.6055 8.30252 11.6055 8.98799 11.6055Z" />
              <path d="M9.26579 3.15175C9.49428 3.20253 9.67199 3.2533 9.84971 3.30408C10.916 3.65951 11.6269 4.67502 11.6269 5.7667C11.6269 6.09674 11.3984 6.32523 11.0683 6.32523C9.67199 6.32523 8.27566 6.32523 6.87933 6.32523C6.54929 6.32523 6.34618 6.09675 6.34618 5.79209C6.32079 4.54808 7.31092 3.40563 8.52954 3.20253C8.58031 3.20253 8.63109 3.17714 8.68186 3.15175C8.25027 3.0502 7.89484 2.82171 7.64096 2.44089C7.38708 2.06007 7.33631 1.62848 7.43786 1.19688C7.61558 0.435248 8.32643 -0.047121 9.11346 0.00365474C9.82432 0.0544305 10.4844 0.689127 10.5352 1.42538C10.6367 2.16162 10.2051 2.94865 9.26579 3.15175Z" />
              <path d="M14.8014 9.49782C13.0242 9.49782 11.2978 9.49782 9.52068 9.49782C9.52068 9.67554 9.52068 9.82786 9.52068 10.0056C9.52068 10.3102 9.29219 10.5387 8.98753 10.5387C8.68288 10.5387 8.47978 10.3102 8.45439 10.0056C8.45439 9.85325 8.45439 9.67554 8.45439 9.49782C6.70263 9.49782 4.95086 9.49782 3.17371 9.49782C3.17371 9.67554 3.17371 9.82786 3.17371 10.0056C3.17371 10.3102 2.94522 10.5387 2.64057 10.5387C2.33591 10.5387 2.10742 10.3102 2.10742 10.0056C2.10742 9.67554 2.10742 9.34549 2.10742 9.01545C2.10742 8.66002 2.31052 8.45692 2.66595 8.45692C4.51927 8.45692 6.3472 8.45692 8.20051 8.45692C8.27667 8.45692 8.32745 8.45692 8.429 8.45692C8.429 8.2792 8.429 8.10149 8.429 7.94916C8.429 7.64451 8.65749 7.41602 8.96215 7.41602C9.2668 7.41602 9.4699 7.64451 9.49529 7.94916C9.49529 8.10149 9.49529 8.2792 9.49529 8.45692C9.57145 8.45692 9.64762 8.45692 9.69839 8.45692C11.5263 8.45692 13.3542 8.45692 15.2076 8.45692C15.6138 8.45692 15.8169 8.66002 15.8169 9.06623C15.8169 9.37088 15.8169 9.70092 15.8169 10.0056C15.8169 10.3356 15.5884 10.5641 15.2837 10.5641C14.9791 10.5641 14.776 10.3356 14.7506 10.031C14.776 9.85325 14.8014 9.67554 14.8014 9.49782Z" />
            </svg>
            {t("user_mng")}
            <Tooltip text={t("add_user")}>
              <Link
                className="action__buttons"
                to={"/dashboard/user-management/add"}
              >
                <Plus size={18} color="white" style={{ marginRight: "0em" }} />
              </Link>
            </Tooltip>
          </div>
        </div>

        <div className="details__container">
          <div className="container__main__content__listing__table">
            <div className="container__main__content__listing__table__content">
              <DataTable
                columns={columns}
                data={list}
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
      </div>
      {deletePopupVisibility && (
        <ConfirmationPopup
          onClose={() => setDeletePopupVisibility(false)}
          onDelete={onDelete}
        />
      )}
      {resetPasswordConfirmationPopup && (
        <SimpleConfirmationPopup
          onClose={() => setResetPasswordConfirmationPopup(false)}
          text={t("reset_pass_msg")}
        />
      )}
    </>
  );
}
