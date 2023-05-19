import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";

export default function screens() {
  return (
    // Create a container div with flex display to hold the sidebar and outlet components
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
      {/* Render the Sidebar component */}
      <Sidebar />

      {/* Render the Outlet component */}
      <Outlet />
    </div>
  );
}
