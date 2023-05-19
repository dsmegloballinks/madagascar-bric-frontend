import Select from "./Select";
import { useState, useEffect } from "react";

export default function TableEntryUpdateStatus({
  children,
  onChangeStatus,
  statusUpdated,
  ...props
}) {
  const [status, setStatus] = useState(
    children == 1
      ? { value: 1, label: "Active" }
      : { value: 2, label: "Revoke" }
  );

  useEffect(() => {
    setStatus(
      children == 1
        ? { value: 1, label: "Active" }
        : { value: 2, label: "Revoke" }
    );
  }, [statusUpdated]);
  return (
    <div
      className="container__main__content__listing__table__content__list__entry"
      {...props}
    >
      <Select
        placeholder="Active"
        backgroundProp="red"
        widthProp="180px"
        value={status}
        options={[
          { value: 1, label: "Active" },
          { value: 2, label: "Revoke" },
        ]}
        onChange={(e) => {
          setStatus(e);
          onChangeStatus(e);
        }}
      />
      {/* <div
        style={
          children == "Verified"
            ? {
                background: "#00E76C",
                padding: ".5em 1.5em",
                borderRadius: "20px",
                color: "green",
              }
            : {
                background: "#FF9C98",
                padding: ".5em 1.5em",
                borderRadius: "20px",
                color: "red",
              }
        }
      >
        {children}
      </div> */}
    </div>
  );
}
