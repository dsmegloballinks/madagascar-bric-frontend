import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";

export default function screens() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "2em",
        position: "sticky",
        width: "100%",
        maxWidth: "1350px",
        margin: "2em auto",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}
