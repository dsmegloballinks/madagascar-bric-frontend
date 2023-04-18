export default function TableEntryStatus({ children, ...props }) {
  return (
    <div
      className="container__main__content__listing__table__content__list__entry"
      {...props}
    >
      <div
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
      </div>
    </div>
  );
}
