import { Link, NavLink } from "@router";
import { sidebarCategories, sidebarEnteries, userAtom } from "../global/index";

import { Fragment } from "react";
import { X, LogOut } from "react-feather";
import { logo } from "@assets";
import { useState } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ setSidebarOpen }) {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useAtom(userAtom);
  return (
    <>
      {isHover ? (
        <div
          className="container__sidebar animate"
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
          // style={{ transition: "opacity 2s", opacity: 1 }}
        >
          <div className="container__sidebar__header">
            <Link to="/dashboard" className="container__sidebar__logo">
              <img
                src={logo}
                alt="logo"
                className="container__sidebar__logo__img"
              />
              <div className="container__sidebar__logo__name">
                Madagascar <br /> Birth Registration
              </div>
            </Link>
            <button
              className="container__sidebar__button"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={20} color="currentColor" />
            </button>
          </div>
          <div className="container__sidebar__content">
            {sidebarEnteries.map((entry) => (
              <NavLink
                key={entry.path}
                onClick={() => {
                  if (window.innerWidth < 820) {
                    setSidebarOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                end
                to={entry.path}
                state={entry.link}
                className="container__sidebar__entry__content__entry"
              >
                {entry.icon}
                {entry.name}
              </NavLink>
            ))}
          </div>
          <div
            className="container__sidebar__entry"
            style={{
              textAlign: "start",
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              padding: ".8em 2em",
              cursor: "pointer",
              borderRadius: "0",
            }}
          >
            <LogOut
              size={18}
              style={{ marginRight: "1em" }}
              onClick={() => {
                setUser(null);
                localStorage.removeItem("id");
                navigate("/");
              }}
            />
            Logout
          </div>
        </div>
      ) : (
        <div
          className="container__sidebar__drawer"
          onMouseOver={() => {
            console.log("mouse over");
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
        >
          <div className="container__sidebar__header">
            <Link to="/dashboard" className="container__sidebar__logo">
              <img
                src={logo}
                alt="logo"
                className="container__sidebar__logo__img"
              />
            </Link>
          </div>
          <div
            className="container__sidebar__content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {sidebarEnteries.map((entry) => (
              <NavLink
                key={entry.path}
                onClick={() => {
                  if (window.innerWidth < 820) {
                    setSidebarOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                end
                to={entry.path}
                className="container__sidebar__entry__content__entry"
                style={{
                  width: "40px",
                  padding: 0,
                  justifyContent: "center",
                  paddingLeft: "1em",
                }}
              >
                {entry.icon}
              </NavLink>
            ))}
          </div>
          <div
            className="container__sidebar__entry"
            style={{
              textAlign: "start",
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              padding: ".8em 2em",
              cursor: "pointer",
              borderRadius: "0",
              justifyContent: "center",
            }}
          >
            <LogOut
              size={18}
              onClick={() => {
                setUser(null);
                localStorage.removeItem("id");
                navigate("/");
              }}
            />
            {/* Logout */}
          </div>
        </div>
      )}
    </>
  );
}
