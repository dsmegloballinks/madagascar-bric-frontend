import Select from "./Select";

export default function TableEntryUpdateStatus({ children, ...props }) {
  return (
    <div
      className="container__main__content__listing__table__content__list__entry"
      {...props}
    >
      <Select
        placeholder="Active"
        backgroundProp="red"
        widthProp="180px"
        value={
          children == 1
            ? { value: 1, label: "Active" }
            : { value: 0, label: "Revoke" }
        }
        options={[
          { value: 1, label: "Active" },
          { value: 2, label: "Revoke" },
        ]}
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
