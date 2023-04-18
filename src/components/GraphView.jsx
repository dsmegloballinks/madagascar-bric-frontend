import React from "react";
import BarChartGraph from "./BarChartGraph";
import PieChartGraph from "./PieChartGraph";
import AreaChartGraph from "./AreaChartGraph";

export default function GraphView() {
  return (
    <>
      <div className="graph__container">
        <div className="bar__graphr__container">
          <div className="bar__graphr__container__heading">Last 30 Days</div>
          <BarChartGraph />
        </div>
        <div className="pie__graphr__container">
          <div className="bar__graphr__container__heading">Verification</div>
          <PieChartGraph />
        </div>
      </div>
      <div className="area__graphr__container">
        <div className="bar__graphr__container__heading">This Year</div>
        <div className="area__graphr__container__heading">32,234,45</div>
        <AreaChartGraph />
      </div>
    </>
  );
}
