import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";
import { useTranslation } from "react-i18next";
import Select from "@components/Select";

const languageOptions = [
  {
    nativeName: "en",
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
    nativeName: "mg",
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
    nativeName: "fr",
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

export default function screens() {
  const { t, i18n } = useTranslation();
  var language = localStorage.getItem("lang");
  var [currentLang, setCurrentLang] = useState(language ? language : "en");
  return (
    // Create a container div with flex display to hold the sidebar and outlet components
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          padding: "1em 2em 1em 1em",
        }}
      >
        <div>
          <Select
            placeholder="English"
            background="white"
            widthProp="150px"
            options={languageOptions}
            defaultValue={
              language == "fr"
                ? languageOptions[2]
                : language == "mg"
                ? languageOptions[1]
                : languageOptions[0]
            }
            getOptionLabel={(e) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                {e.icon}
                <span style={{ marginLeft: 5 }}>{e.text}</span>
              </div>
            )}
            onChange={(e) => {
              i18n.changeLanguage(e.nativeName);
              setCurrentLang((currentLang = e.nativeName));
              localStorage.setItem("lang", e.nativeName);
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          // marginTop: "2em",
          position: "sticky",
          width: "100%",
          maxWidth: "1350px",
          margin: "0em auto",
        }}
      >
        {/* Render the Sidebar component */}
        <Sidebar />

        {/* Render the Outlet component */}
        <Outlet />
      </div>
    </>
  );
}
