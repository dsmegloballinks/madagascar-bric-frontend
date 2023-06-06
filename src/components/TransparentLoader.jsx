import PropagateLoader from "react-spinners/PropagateLoader";

export default function TransparentLoader() {
  return (
    <div className="popup">
      <div
       className="popup__overlay" style={{ zIndex: "999999", opacity: ".7"  }}
      >
        <div
          className="alert__popup__container"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="loader__container__wrapper">
            <PropagateLoader
              loading={true}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
              //   color="#2a5e59"
              color="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
