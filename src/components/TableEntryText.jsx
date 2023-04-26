export default function TableEntryText({ children, className, ...props }) {
  return (
    <div
      className={
        className
          ? className
          : "container__main__content__listing__table__content__list__entry"
      }
      {...props}
    >
      {children}
    </div>
  );
}
