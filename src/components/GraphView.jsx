import React from "react";
import BarChartGraph from "./BarChartGraph";
import PieChartGraph from "./PieChartGraph";
import AreaChartGraph from "./AreaChartGraph";

export default function GraphView({
  genderGraphData,
  graphAnalytics,
  yearsData,
  totalRegistrations,
}) {
  return (
    <>
      <div className="graph__container">
        <div className="bar__graphr__container">
          <div
            className="bar__graphr__container__heading"
            style={{ marginBottom: "1em" }}
          >
            Last 7 Days
          </div>
          <BarChartGraph graphAnalytics={graphAnalytics} />
        </div>
        <div className="pie__graphr__container">
          <div className="bar__graphr__container__heading">
            Gender Segregation
          </div>
          {/* <div className="bar__graphr__container__info">Males or Females</div> */}
          <PieChartGraph genderGraphData={genderGraphData} />
        </div>
      </div>
      <div className="area__graphr__container">
        <div className="bar__graphr__container__heading">This Year</div>
        <div className="area__graphr__container__heading">
          {totalRegistrations}
        </div>
        <AreaChartGraph graphAnalytics={yearsData} />
      </div>
    </>
  );
}
