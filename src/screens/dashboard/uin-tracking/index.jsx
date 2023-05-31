import React, { useContext, useEffect, useMemo, useState } from "react";
import { ArrowLeft, Edit2, Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import TableEntryText from "@components/TableEntryText";
import EditUinTracking from "@components/EditUinTracking";
import Select from "@components/Select";
import Tooltip from "@components/Tooltip";
import DataTable from "react-data-table-component";
import Loader from "@components/Loader";
import { registrationsGetCall, uinTrackingPostCall } from "../../../apis/Repo";
import { PopupContext } from "../../../context/PopupContext";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function UINTracking() {
  const { t, i18n } = useTranslation();
  const { setAlertPopupVisibility, setAlertPopupMessage, isSidebarHovered } =
    useContext(PopupContext);
  const navigate = useNavigate();
  const errorTypeOptions = [
    { label: t("wrg_niu_no"), color: "red", value: 2 },
    { label: t("wrg_loc_allo"), color: "orange", value: 3 },
    { label: t("dup_niu"), color: "yellow", value: 1 },
  ];
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [filterText, setFilterText] = useState("");
  const [selectedRecord, setSelectedRecord] = useState(null);
  let [hoverStyle, setHoverStyle] = useState("");

  /* The above code is using the `useEffect` hook in React to update the `hoverStyle` state variable
based on the value of `isSidebarHovered`. If `isSidebarHovered` is true, `hoverStyle` is set to
"superAdmin__dashboard__container", otherwise it is set to "dashboard__container". This code is
likely used to dynamically change the styling of a dashboard container based on whether or not the
sidebar is being hovered over. */
  useEffect(() => {
    setHoverStyle(
      (hoverStyle = isSidebarHovered
        ? "superAdmin__dashboard__container"
        : "dashboard__container")
    );
  }, [isSidebarHovered]);

  useEffect(() => {
    getRegistrations();
  }, [page, filterText]);

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
            placeholder="Search"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
          <Search size={19} className="list__search__wrapper__icon" />
        </div>
      </div>
    );
  }, [filterText]);

  /* The above code is defining an array of objects called "columns" which is used to configure the
columns of a table. Each object in the array represents a column and contains properties such as the
column name, the data selector function, the cell format function, and whether the column is
sortable. The code also includes JSX code to render a tooltip and an edit icon for each row in the
table. */
  const columns = [
    {
      name: t("niu"),
      selector: (row) => row.cr.uin,
      sortable: true,
    },
    {
      name: t("child_name"),
      selector: (row) => row.cr.first_name,
      format: (row) => row.cr.first_name + " " + row.cr.last_name,
      sortable: true,
    },
    {
      name: t("commune"),
      selector: (row) => row.foko.commune_name,
      sortable: true,
    },
    {
      name: t("fokontany"),
      selector: (row) => row.foko.fokontonay_name,
      sortable: true,
    },
    {
      name: t("err_type"),
      selector: (row) => row.cr.error_id,
      cell: (row) => (
        <TableEntryText
          colorBox={
            row.cr.error_id == 1
              ? "Yellow"
              : row.cr.error_id == 2
              ? "red"
              : row.cr.error_id == 3
              ? "orange"
              : "black"
          }
        >
          {row.cr.error_id
            ? row.cr.error_id == 1
              ? t("dup_niu")
              : row.cr.error_id == 2
              ? t("wrg_niu_no")
              : row.cr.error_id == 3
              ? t("wrg_loc_allo")
              : row.cr.error_id
            : "---"}
        </TableEntryText>
      ),
      sortable: true,
    },
    {
      name: t("error_rep_date"),
      selector: (row) => row.cr.error_date,
      format: (row) =>
        row.cr.error_date
          ? moment(row.cr.error_date).format("DD MMM, YYYY")
          : "---",
      sortable: true,
    },
    {
      name: t("error_cor_date"),
      selector: (row) => "pending",
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
          <Tooltip text={t("edit_niu")}>
            <Link
              className="container__main__content__listing__table__content__list__entry__action__edit"
              onClick={() => {
                setSelectedRecord(row);
                setIsEdit(true);
              }}
            >
              <Edit2 size={18} />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  /* The above code is defining a JavaScript object `customStyles` that contains a property `headCells`
which is also an object. The `headCells` object has a `style` property that is an object containing
CSS styles for the font size and font weight of table header cells. These styles will be used to
customize the appearance of a table in a React application. */
  const customStyles = {
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "capitalize",
      },
    },
  };

  /**
   * This function retrieves registrations data and sets the state of the list and total records based
   * on the response, while also handling errors.
   */
  const getRegistrations = (errorType) => {
    setIsLoading(true);
    registrationsGetCall(
      page,
      limit,
      "",
      "",
      "",
      "",
      "",
      "",
      errorType,
      filterText
    )
      .then(({ data }) => {
        setIsLoading(false);
        if (data.data.success) {
          setList(data.data.result);
          setTotalRecords(data.data.total_records);
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
   * The function `onAdd` takes a number and an item, creates an object with specific properties, makes
   * a POST call with the object, and handles the response.
   */
  const onAdd = (number, item) => {
    let object = {
      uin: number,
      cr_id: item.cr.id,
    };
    console.log("object", object);
    uinTrackingPostCall(object)
      .then(({ data }) => {
        if (data.error_code == 0) getRegistrations();
        else {
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

  return (
    <>
      <div className={hoverStyle}>
        <div className="main__container__top__bar">
          <div className="details__header">
            <ArrowLeft
              className="details__header__back"
              size={18}
              onClick={() => navigate(-1)}
            />
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.9082 3.32955C7.9082 1.4798 9.28282 0 10.9747 0C12.6453 0 13.9988 1.50292 13.9988 3.32955C13.9988 5.17929 12.6242 6.65909 10.9324 6.65909C9.26167 6.65909 7.9082 5.17929 7.9082 3.32955ZM10.9747 0.508682C9.55774 0.48556 8.39461 1.75726 8.37346 3.30642C8.37346 4.85559 9.51544 6.12729 10.9324 6.15041C12.3493 6.15041 13.5124 4.90183 13.5335 3.35267C13.5335 1.82663 12.3916 0.531803 10.9747 0.508682Z" />
              <path d="M13.0496 6.45117C13.0496 9.24892 13.0496 12.0467 13.0496 14.8675C12.7324 14.8675 12.4364 14.8675 12.1191 14.8675C12.1191 14.8213 12.1191 14.7519 12.1191 14.7057C12.1191 12.1854 12.1191 9.66511 12.1191 7.1217C12.1191 7.00609 12.1403 6.95985 12.246 6.89049C12.5209 6.75175 12.7747 6.5899 13.0496 6.45117Z" />
              <path d="M11.6317 14.8686C11.3356 14.8686 11.0184 14.8686 10.7012 14.8686C10.7012 14.8223 10.7012 14.7529 10.7012 14.7067C10.7012 12.5332 10.7012 10.3829 10.7012 8.20946C10.7012 8.14009 10.7435 8.02448 10.7858 7.97824C11.0184 7.7239 11.251 7.46956 11.4836 7.21522C11.5259 7.16897 11.5682 7.14585 11.6317 7.09961C11.6317 9.68926 11.6317 12.2789 11.6317 14.8686Z" />
              <path d="M10.1721 7.12259C9.93952 7.37693 9.68575 7.65439 9.43197 7.90873C9.38968 7.93185 9.32623 7.95498 9.28393 7.95498C8.73409 7.95498 8.20539 7.95498 7.65554 7.95498C7.57095 7.95498 7.50751 7.9781 7.44406 8.07059C6.95766 8.67175 6.47126 9.27292 6.00601 9.87409C5.92142 9.96657 5.83682 10.0128 5.70993 10.0128C4.88516 10.0128 4.03925 10.0128 3.21448 10.0128C3.10874 10.0128 3.0453 10.0359 2.98186 10.1284C2.13594 11.1458 1.26887 12.1632 0.422958 13.1805C0.40181 13.2036 0.380659 13.2499 0.359511 13.2961C0.232623 13.1574 0.10574 13.0418 0 12.9262C0.190331 12.695 0.401808 12.4637 0.592139 12.2325C1.33232 11.377 2.05134 10.4984 2.79152 9.64287C2.85496 9.55038 2.93956 9.52726 3.0453 9.52726C3.89122 9.52726 4.73713 9.52726 5.58305 9.52726C5.66764 9.52726 5.73108 9.50414 5.79453 9.41165C6.28093 8.81048 6.76734 8.20932 7.25374 7.58503C7.31718 7.49254 7.40176 7.44629 7.5075 7.44629C8.0362 7.44629 8.5649 7.44629 9.0936 7.44629C9.19934 7.44629 9.26279 7.42317 9.32623 7.33068C9.34738 7.30756 9.36853 7.28444 9.36853 7.28444C9.55886 6.91449 9.83378 6.86825 10.1721 7.12259Z" />
              <path d="M10.2355 14.8673C9.91831 14.8673 9.62224 14.8673 9.32617 14.8673C9.32617 12.9019 9.32617 10.9597 9.32617 8.99432C9.34732 8.99432 9.34731 8.9712 9.34731 8.9712C9.5165 8.9712 9.70683 9.01744 9.85487 8.94807C10.0029 8.87871 10.1086 8.71686 10.2355 8.57812C10.2355 10.6822 10.2355 12.7632 10.2355 14.8673Z" />
              <path d="M7.9082 8.9707C8.22542 8.9707 8.52149 8.9707 8.81756 8.9707C8.81756 10.9361 8.81756 12.8783 8.81756 14.8437C8.52149 14.8437 8.20427 14.8437 7.9082 14.8437C7.9082 12.9014 7.9082 10.9592 7.9082 8.9707Z" />
              <path d="M7.4227 14.8682C7.10548 14.8682 6.80941 14.8682 6.49219 14.8682C6.49219 14.8219 6.49219 14.7526 6.49219 14.7063C6.49219 13.4809 6.49219 12.2323 6.49219 11.0068C6.49219 10.9143 6.51334 10.8219 6.57678 10.7525C6.85171 10.3363 7.12663 9.94322 7.4227 9.50391C7.4227 11.3074 7.4227 13.0647 7.4227 14.8682Z" />
              <path d="M3.70117 11.0293C3.99724 11.0293 4.31447 11.0293 4.61054 11.0293C4.61054 12.301 4.61054 13.5727 4.61054 14.8444C4.31447 14.8444 3.99724 14.8444 3.70117 14.8444C3.70117 13.5958 3.70117 12.3241 3.70117 11.0293Z" />
              <path d="M6.00506 14.8675C5.68784 14.8675 5.39177 14.8675 5.0957 14.8675C5.0957 13.5958 5.0957 12.3241 5.0957 11.0293C5.39177 11.0293 5.70899 11.0293 6.00506 11.0293C6.00506 12.301 6.00506 13.5727 6.00506 14.8675Z" />
              <path d="M3.19419 14.8673C2.89811 14.8673 2.58089 14.8673 2.26367 14.8673C2.26367 14.7286 2.26367 14.613 2.26367 14.4743C2.26367 13.8962 2.26367 13.3182 2.26367 12.7401C2.26367 12.6708 2.26367 12.6014 2.30597 12.5552C2.58089 12.1852 2.87697 11.8384 3.19419 11.4453C3.19419 12.6014 3.19419 13.7344 3.19419 14.8673Z" />
              <path d="M1.7975 14.8682C1.37454 14.8682 0.951582 14.8682 0.486328 14.8682C0.930434 14.3133 1.3534 13.7815 1.7975 13.2266C1.7975 13.7815 1.7975 14.3133 1.7975 14.8682Z" />
              <path d="M10.9546 1.04102C12.1178 1.04102 13.0694 2.0815 13.0694 3.3532C13.0694 4.6249 12.1178 5.66538 10.9546 5.66538C9.7915 5.66538 8.83984 4.6249 8.83984 3.3532C8.83984 2.05838 9.77035 1.04102 10.9546 1.04102ZM10.722 4.6249C10.722 4.80988 10.722 4.97173 10.722 5.13358C10.8912 5.13358 11.0392 5.13358 11.1873 5.13358C11.1873 4.97173 11.1873 4.80988 11.1873 4.64802C11.2296 4.64802 11.2296 4.64802 11.2507 4.6249C11.6525 4.53241 11.9063 4.18559 11.8851 3.79252C11.8428 3.3532 11.5468 3.09886 11.1238 3.07574C10.9969 3.07574 10.8489 3.07574 10.722 3.07574C10.5951 3.07574 10.5105 2.98325 10.5105 2.84452C10.4894 2.70579 10.574 2.59018 10.6797 2.56706C10.9335 2.54394 11.1873 2.56706 11.441 2.56706C11.441 2.65955 11.441 2.72891 11.4622 2.79828C11.6314 2.79828 11.7794 2.79828 11.9063 2.79828C11.9063 2.54394 11.9063 2.2896 11.9063 2.03526C11.6737 2.03526 11.441 2.03526 11.2084 2.03526C11.2084 1.85028 11.2084 1.68843 11.2084 1.5497C11.0392 1.5497 10.8912 1.5497 10.7432 1.5497C10.7432 1.71155 10.7432 1.8734 10.7432 2.03526C10.722 2.03526 10.7009 2.03526 10.6797 2.05838C10.2779 2.15086 10.003 2.47457 10.0453 2.86764C10.0876 3.30696 10.3836 3.58442 10.8277 3.58442C10.9546 3.58442 11.1027 3.58442 11.2296 3.58442C11.3564 3.58442 11.441 3.70003 11.441 3.83876C11.441 3.97749 11.3564 4.0931 11.2507 4.0931C11.0181 4.0931 10.7643 4.0931 10.5105 4.0931C10.5105 4.00061 10.5105 3.93125 10.4894 3.83876C10.3202 3.83876 10.1933 3.83876 10.0453 3.83876C10.0453 4.0931 10.0453 4.34744 10.0453 4.60178C10.2567 4.6249 10.4682 4.6249 10.722 4.6249Z" />
            </svg>
            {t("niu_track")}
          </div>
          <div style={{ display: "flex" }}></div>
        </div>
        <div className="details__container">
          <div className="error__types__container__wrapper">
            <div style={{ display: "flex" }}>
              {errorTypeOptions.map((item) => (
                <div className="error__types__container">
                  <div
                    style={{
                      background: item.color,
                      width: "15px",
                      height: "15px",
                      marginRight: ".5em",
                    }}
                  ></div>
                  {item.label}
                </div>
              ))}
            </div>
            <div>
              <Select
                widthProp={"180px"}
                placeholder={t("err_type")}
                options={errorTypeOptions}
                onChange={(e) => {
                  getRegistrations(e.value);
                }}
              />
            </div>
          </div>
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
                noDataComponent={t("noData")}
              />
            </div>
          </div>
        </div>
      </div>
      {isEdit && (
        <EditUinTracking
          onClose={() => setIsEdit(false)}
          selectedRecord={selectedRecord}
          onAdd={onAdd}
        />
      )}
    </>
  );
}
