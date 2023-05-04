import React, { useEffect, useState, useContext } from "react";
import { AlignCenter, Globe, Plus } from "react-feather";
import { register } from "@assets";
import GraphView from "@components/GraphView";
import Registerations from "@components/Registrations";
import { useLocation, useNavigate } from "react-router-dom";
import RegistrationsMapView from "@components/RegistrationsMapView";
import Select from "@components/Select";
import UploadFileSingle from "@components/UploadFileSingle";
import {
  analyticsGetCall,
  filePostCall,
  fokontanyGetCall,
  genderAnalyticsGetCall,
  registrationsGetCall,
} from "../../apis/Repo";
import { PopupContext } from "../../context/PopupContext";
import moment from "moment";
import { graphAnalyticsGetCall } from "../../apis/Repo";

export default function dashboard() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { setAlertPopupVisibility } = useContext(PopupContext);
  const [selectedFilter, setSelectedFilter] = useState("Graph");
  const filters = ["Graph", "Map", "List"];
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");
  const [dataList, setDataList] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;
  const [isUploadFilePopupOpen, setIsUploadFilePopupOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [regionList, setRegionList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [communeList, setCommuneList] = useState([]);
  const [fokontanyList, setFokontanyList] = useState([]);
  const [genderGraphData, setGenderGraphData] = useState([]);
  const [graphAnalytics, setGraphAnalytics] = useState([]);
  const [yearsData, setYearsData] = useState([]);
  const [totalRegistrations, setTotalRegistrations] = useState("");
  let [region, setRegion] = useState("");
  let [district, setDistrict] = useState("");
  let [commune, setCommune] = useState("");
  let [fokontany, setFokontany] = useState("");
  let [sevenDayStartDate, setSevenDayStartDate] = useState("");
  let [sevenDayEndDate, setSevenDayEndDate] = useState("");
  let [yearStartDate, setYearStartDate] = useState("");
  let [yearEndDate, setYearEndDate] = useState("");

  useEffect(() => {
    getRegistrations();
  }, [page]);

  useEffect(() => {
    setDefatulDates();
    setYearGraphDefaultDates();
    getAnalytics();
    getRegions();
    getGenderAnalytics();
  }, []);

  useEffect(() => {
    if (state == "List") setSelectedFilter("List");
    else if (state == "Map") setSelectedFilter("Map");
    else setSelectedFilter("Graph");
  }, [state]);

  const setDefatulDates = () => {
    var makeDate = new Date();

    console.log("Original date: ", makeDate.toString());

    makeDate.setDate(makeDate.getDate() - 7);

    console.log("After subtracting a month: ", makeDate.toString());
    let startDate = moment(makeDate).format("YYYY-MM-DD h:mm:ss");

    let endDate = moment(new Date()).format("YYYY-MM-DD h:mm:ss");

    setSevenDayStartDate(
      (sevenDayStartDate = moment(startDate).format("YYYY-MM-DD"))
    );
    setSevenDayEndDate(
      (sevenDayEndDate = moment(endDate).format("YYYY-MM-DD"))
    );

    getGraphAnalytics(sevenDayStartDate, sevenDayEndDate, 7);
  };

  const setYearGraphDefaultDates = () => {
    var makeDate = new Date();

    makeDate.setDate(makeDate.getDate() - 365);

    let startDate = moment(makeDate).format("YYYY-MM-DD h:mm:ss");

    let endDate = moment(new Date()).format("YYYY-MM-DD h:mm:ss");

    setYearStartDate((yearStartDate = moment(startDate).format("YYYY-MM-DD")));
    setYearEndDate((yearEndDate = moment(endDate).format("YYYY-MM-DD")));
    getGraphAnalytics(yearStartDate, yearEndDate, 12);
  };

  const getRegistrations = (sDate, eDate, candle, rg, dst, comun, fokonty) => {
    registrationsGetCall(
      page,
      limit,
      sDate,
      eDate,
      candle,
      rg,
      dst,
      comun,
      fokonty
    )
      .then(({ data }) => {
        if (data.data.success) {
          setDataList(data.data.result);
          setTotalRecords(data.data.total_records);
        } else {
          setDataList([]);
          setTotalRecords(0);
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

  const languageOptions = [
    {
      value: 1,
      text: "English",
      icon: (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 256.000000 256.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path d="M1170 2388 l0 -33 115 0 115 -1 0 33 0 33 -115 0 -115 0 0 -32z" />
            <path
              d="M995 2385 c-106 -27 -194 -61 -279 -109 -98 -56 -94 -52 -68 -79 l23
-24 127 63 c70 35 163 73 206 84 44 11 81 22 83 24 3 2 3 18 1 34 l-3 30 -90
-23z"
            />
            <path
              d="M1482 2369 c3 -31 7 -33 80 -54 82 -24 203 -78 279 -125 l47 -29 23
25 24 25 -25 20 c-48 37 -226 119 -314 144 -115 33 -118 32 -114 -6z"
            />
            <path
              d="M1972 2137 l-22 -24 49 -41 48 -41 24 25 24 26 -44 39 c-24 21 -47
39 -51 39 -3 0 -16 -10 -28 -23z"
            />
            <path
              d="M430 2049 l-33 -40 23 -25 c13 -13 26 -24 30 -24 4 0 21 18 39 41
l33 40 -23 25 c-12 13 -26 24 -30 24 -4 0 -22 -18 -39 -41z"
            />
            <path
              d="M313 1898 c-43 -68 -72 -122 -96 -180 l-16 -38 83 0 83 0 6 48 c3 27
15 75 26 108 l21 59 -34 33 -33 34 -40 -64z"
            />
            <path
              d="M2171 1916 c-29 -30 -32 -36 -20 -57 16 -31 39 -118 39 -151 l0 -28
80 0 c44 0 80 2 80 4 0 21 -93 197 -132 249 -12 17 -15 16 -47 -17z"
            />
            <path
              d="M1183 1530 l3 -25 -510 6 c-281 4 -514 4 -518 0 -26 -23 -36 -361
-12 -438 l6 -23 509 0 509 0 0 -453 c0 -250 -2 -456 -5 -459 -3 -3 -20 -2 -38
1 l-32 7 -5 333 -5 334 -236 -242 -235 -241 60 -39 c348 -226 764 -252 1132
-73 402 198 652 618 631 1061 -3 64 -11 144 -18 177 l-12 61 -509 -5 c-484 -5
-508 -4 -508 13 0 16 -2 16 -19 -4 -17 -20 -27 -22 -97 -19 -73 3 -79 4 -86
28 l-8 25 3 -25z m1209 -505 c-2 -11 -10 -44 -18 -72 l-15 -53 -209 0 c-116 0
-210 -3 -210 -7 0 -3 60 -67 133 -140 72 -74 133 -137 135 -142 1 -4 -7 -16
-18 -26 -21 -19 -22 -18 -188 148 l-167 167 -80 0 -80 0 208 -208 c114 -114
207 -212 207 -217 0 -10 -44 -50 -118 -109 l-24 -19 -228 228 -227 227 -8
-323 c-4 -178 -9 -327 -12 -331 -2 -5 -20 -8 -39 -8 l-34 0 0 455 0 455 498
-2 c491 -3 497 -3 494 -23z"
            />
            <path
              d="M211 848 c24 -63 93 -193 119 -228 l19 -25 66 65 c37 36 102 104 146
152 l80 87 -226 1 -225 1 21 -53z"
            />
            <path
              d="M755 778 c-66 -68 -160 -165 -210 -215 l-89 -93 39 -40 c22 -22 44
-39 50 -38 11 3 485 494 485 503 0 3 -35 5 -78 5 l-77 0 -120 -122z"
            />
          </g>
        </svg>
      ),
    },
    {
      value: 2,
      text: "Malagasy",
      icon: (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 200.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M895 1994 c-11 -2 -57 -11 -102 -20 l-83 -17 0 -957 0 -957 52 -12
c122 -28 234 -35 337 -23 245 31 422 114 593 280 260 251 362 607 274 953
-110 436 -487 739 -936 754 -63 2 -124 2 -135 -1z"
            />
          </g>
        </svg>
      ),
    },
    {
      value: 3,
      text: "French",
      icon: (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M1575 4921 c-542 -226 -1009 -654 -1280 -1173 -198 -381 -289 -753
-289 -1188 0 -271 28 -475 99 -719 167 -574 537 -1074 1045 -1413 127 -85 351
-203 468 -246 l52 -20 0 2399 c0 1319 -1 2399 -2 2398 -2 0 -43 -17 -93 -38z"
            />
            <path
              d="M3450 2560 l0 -2399 48 17 c87 31 366 177 467 244 308 205 592 499
781 808 124 204 231 456 289 684 45 180 63 292 77 488 24 335 -31 717 -147
1034 -53 143 -183 403 -264 524 -199 301 -479 576 -777 765 -88 56 -349 188
-431 219 l-43 16 0 -2400z"
            />
          </g>
        </svg>
      ),
    },
  ];

  const getAnalytics = () => {
    let date = moment(new Date()).format("YYYY-MM-DD");
    analyticsGetCall(date)
      .then(({ data }) => {
        if (data.success) setAnalytics(data.result);
        else setAnalytics(null);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getGenderAnalytics = () => {
    let newArray = [];
    let date = start ? start : moment(new Date()).format("YYYY-MM-DD");
    genderAnalyticsGetCall(date, end, region, district, commune, fokontany)
      .then(({ data }) => {
        if (data.data.success) {
          for (let index = 0; index < data.data.result.length; index++) {
            const element = data.data.result[index];
            let obj = {
              title: element.gender == "masculin" ? "Male" : "Female",
              value: parseInt(element.avg),
              color: element.gender == "masculin" ? "#0acf66" : "#ff6161",
            };
            newArray.push(obj);
          }
          setGenderGraphData(newArray);
        } else setGenderGraphData([]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getGraphAnalytics = (sDate, eDate, candle, rg, dst, comun, fokonty) => {
    let newArray = [];
    graphAnalyticsGetCall(sDate, eDate, candle, rg, dst, comun, fokonty)
      .then(({ data }) => {
        if (data.success) {
          for (let index = 0; index < data.result.data_list.length; index++) {
            const element = data.result.data_list[index];
            let obj = {
              name: candle == 7 ? element.day : element.month,
              value: element.count,
            };
            newArray.push(obj);
          }
          if (candle == 7) setGraphAnalytics(newArray);
          else {
            setYearsData(newArray);
            setTotalRegistrations(data.result.total_count);
          }
        } else {
          if (candle == 7) setGraphAnalytics([]);
          else {
            setYearsData([]);
            setTotalRegistrations(0);
          }
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const getRegions = (region, district, commune) => {
    fokontanyGetCall(region, district, commune)
      .then(({ data }) => {
        if (data.data.success) {
          let newArray = [];
          if (region) {
            for (let index = 0; index < data.data.result.length; index++) {
              const element = data.data.result[index];
              element.label = element.libelle_district;
              element.value = element.code_district;
              newArray.push(element);
            }
            setDistrictList(newArray);
          } else if (district) {
            for (let index = 0; index < data.data.result.length; index++) {
              const element = data.data.result[index];
              element.label = element.libelle_commune;
              element.value = element.code_commune;
              newArray.push(element);
            }
            setCommuneList(newArray);
          } else if (commune) {
            for (let index = 0; index < data.data.result.length; index++) {
              const element = data.data.result[index];
              element.label = element.libelle_fokontany;
              element.value = element.code_fokontany;
              newArray.push(element);
            }
            setFokontanyList(newArray);
          } else {
            for (let index = 0; index < data.data.result.length; index++) {
              const element = data.data.result[index];
              element.label = element.libelle_region;
              element.value = element.code_region;
              newArray.push(element);
            }
            setRegionList(newArray);
          }
        } else {
          if (region) setDistrictList([]);
          else if (district) setCommuneList([]);
          else if (commune) setFokontanyList([]);
          else setRegionList([]);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onRegionChange = (e) => {
    getRegions(e.value);
    setRegion(e);
  };

  const onDistrictChange = (e) => {
    getRegions("", e.value);
    setDistrict(e);
  };

  const onCommuneChange = (e) => {
    getRegions("", "", e.value);
    setCommune(e);
  };

  const onSearch = () => {
    if (selectedFilter == "Graph") {
      getGraphAnalytics(
        yearStartDate,
        yearEndDate,
        12,
        region,
        district,
        commune,
        fokontany
      );
      getGraphAnalytics(
        sevenDayStartDate,
        sevenDayEndDate,
        7,
        region,
        district,
        commune,
        fokontany
      );
      getGenderAnalytics();
    } else if (selectedFilter == "List") {
      getRegistrations(start, end, region, district, commune, fokontany);
    }
  };

  const onReset = () => {
    setStart((start = ""));
    setEnd((end = ""));
    setRegion((region = ""));
    setDistrict((district = ""));
    setCommune((commune = ""));
    setFokontany((fokontany = ""));
    if (selectedFilter == "Graph") {
      getGraphAnalytics(yearStartDate, yearEndDate, 12);
      getGraphAnalytics(sevenDayStartDate, sevenDayEndDate, 7);
      getGenderAnalytics();
    } else if (selectedFilter == "List") {
      getRegistrations();
    }
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
            Dashboard
          </div>
          <div
            className="dashboard__banner__button__wrapper"
            style={{ width: "25%", justifyContent: "space-between" }}
          >
            <button onClick={() => setIsUploadFilePopupOpen(true)}>
              {" "}
              <Plus size={15} /> Upload File
            </button>
            <div>
              <Select
                placeholder="English"
                background="white"
                widthProp="150px"
                options={languageOptions}
                defaultValue={languageOptions[0]}
                getOptionLabel={(e) => (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {e.icon}
                    <span style={{ marginLeft: 5 }}>{e.text}</span>
                  </div>
                )}
              />
            </div>
          </div>
        </div>
        <div className="dashboard__banner__contianer">
          <div className="dashboard__banner__content">
            <h2>Welcome Anna!</h2>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
          </div>
          <div className="dashboard__banner__button__wrapper">
            {/* <button onClick={() => navigate("/dashboard/addchild")}>
              {" "}
              <Plus size={15} /> Add a Child
            </button> */}
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
                {analytics?.over_all_count}
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
                {analytics?.last_seven_days_count}
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
                {analytics?.month_count}
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
                {analytics?.year_count}
              </div>
              <div>Last Year Registered Child</div>
            </div>
          </div>
        </div>
        <div className="list__filters__wrapper">
          <input
            type="date"
            style={{ marginRight: ".5em" }}
            value={start}
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
            value={end}
            className={
              end == ""
                ? "list__filters__input__end__empty"
                : "list__filters__input"
            }
            onChange={(e) => setEnd(e.currentTarget.value)}
          />
          <Select
            placeholder="Region"
            background="white"
            widthProp="180px"
            options={regionList}
            value={region}
            onChange={onRegionChange}
          />
          <Select
            placeholder="District"
            background="white"
            widthProp="180px"
            options={districtList}
            value={district}
            onChange={onDistrictChange}
          />
          <Select
            placeholder="Commune"
            background="white"
            widthProp="180px"
            options={communeList}
            value={commune}
            onChange={onCommuneChange}
          />
          <Select
            placeholder="Fokontany"
            background="white"
            widthProp="180px"
            options={fokontanyList}
            value={fokontany}
            onChange={(e) => setFokontany(e)}
          />

          <button
            className="list__filter__button"
            style={{ marginRight: "1em" }}
            onClick={onSearch}
          >
            Filter
          </button>
          <button
            className="list__filter__button__reset"
            style={{ marginRight: "1em" }}
            onClick={onReset}
          >
            Reset
          </button>
        </div>

        {selectedFilter == "Graph" ? (
          <GraphView
            genderGraphData={genderGraphData}
            graphAnalytics={graphAnalytics}
            yearsData={yearsData}
            totalRegistrations={totalRegistrations}
          />
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
