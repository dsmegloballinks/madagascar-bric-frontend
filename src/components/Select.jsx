import ReactSelect from "react-select";
export default function Select({ options, placeholder }) {
  return (
    <div className="list__container__top__select">
      <ReactSelect
        options={options}
        placeholder={placeholder}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary75: "#0ACF66",
            primary25: "#0ACF66e",
            primary50: "#0ACF66e",
            primary: "#0ACF66",
          },
        })}
        styles={{
          control: (base, state) => ({
            ...base,
            "&:hover": { borderColor: "#F2F2FF" }, // border style on hover
            border: "1px solid transparent", // default border color
            boxShadow: "none", // no box-shadow
            borderRadius: "20px",
            marginRight: "0.5em",
            background: "#F2F2FF",
            width: "150px",
            fontSize: "12px",
          }),
        }}
      />
    </div>
  );
}
