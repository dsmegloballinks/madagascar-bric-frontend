export default function TableEntryText({
  children,
  className,
  colorBox,
  ...props
}) {
  return (
    <div
      className={
        className
          ? className
          : "container__main__content__listing__table__content__list__entry"
      }
      {...props}
    >
      {colorBox ? (
        <div
          style={{
            background: colorBox,
            width: "19px",
            height: "13px",
            marginRight: ".5em",
          }}
        ></div>
      ) : null}
      {children}
    </div>
  );
}
