import PropagateLoader from "react-spinners/PropagateLoader";

const Loader = ({ style }) => {
  return (
    <div className="loader__container__wrapper" style={style}>
      <PropagateLoader
        loading={true}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#0acf66"
      />
    </div>
  );
};

export default Loader;
