import React from "react";
import BarChartGraph from "./BarChartGraph";
import PieChartGraph from "./PieChartGraph";
import AreaChartGraph from "./AreaChartGraph";
import { useTranslation } from "react-i18next";

export default function GraphView({
  genderGraphData,
  graphAnalytics,
  yearsData,
  totalRegistrations,
}) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="graph__container">
        <div className="bar__graphr__container">
          <div
            className="bar__graphr__container__heading"
            style={{ marginBottom: "1em" }}
          >
            {t("last_7_days")}
          </div>
          <BarChartGraph graphAnalytics={graphAnalytics} />
        </div>
        <div className="pie__graphr__container">
          <div className="bar__graphr__container__heading">
            {t("gender_segregation")}
          </div>
          <PieChartGraph genderGraphData={genderGraphData} />
        </div>
      </div>
      <div className="area__graphr__container">
        <div className="bar__graphr__container__heading">{t("this_year")}</div>
        <div className="area__graphr__container__heading">
          {totalRegistrations}
        </div>
        <AreaChartGraph graphAnalytics={yearsData} />
      </div>
    </>
  );
}
