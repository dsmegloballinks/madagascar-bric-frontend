import { Link, NavLink } from "@router";
import { sidebarEnteries, userAtom } from "../global/index";

import { useContext } from "react";
import { X, LogOut } from "react-feather";
import { logo } from "@assets";
import { useState } from "react";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { PopupContext } from "../context/PopupContext";

export default function Sidebar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { setIsSidebarHovered } = useContext(PopupContext);
  const [user, setUser] = useAtom(userAtom);
  const isSuperAdmin = localStorage.getItem("isAdmin");
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {isHover ? (
        <div
          className="container__sidebar animate"
          onMouseOver={() => {
            setIsHover(true);
            setIsSidebarHovered(true);
            localStorage.setItem("isHover", true);
          }}
          onMouseOut={() => {
            setIsHover(false);
            setIsSidebarHovered(false);
            localStorage.setItem("isHover", false);
          }}
          style={{ position: "relative" }}
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
            {sidebarEnteries.flatMap((entry) => {
              return (
                entry.isForSuperAdmin == isSuperAdmin && (
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
                )
              );
            })}
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
            onClick={() => {
              setUser(null);
              localStorage.clear();
              navigate("/");
            }}
          >
            <LogOut size={18} style={{ marginRight: "1em" }} />
            Logout
          </div>
        </div>
      ) : (
        <div
          className="container__sidebar__drawer"
          onMouseOver={() => {
            setIsSidebarHovered(true);
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
            setIsSidebarHovered(false);
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
            {sidebarEnteries.flatMap((entry) => {
              return (
                entry.isForSuperAdmin == isSuperAdmin && (
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
                )
              );
            })}
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
                setIsSidebarHovered(false);
                localStorage.clear();
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
