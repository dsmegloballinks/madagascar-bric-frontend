import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { PieChart } from "react-minimal-pie-chart";

var data = [];

const COLORS = ["#0ACF66", "#FF6161"];

const RADIAN = Math.PI / 180;

export default function PieChartGraph({ genderGraphData }) {
  data = genderGraphData;

  return (
    <PieChart
      data={genderGraphData}
      labelPosition={60}
      radius={35}
      animate
      animationDuration={500}
      animationEasing="ease-out"
      paddingAngle={0}
      viewBoxSize={[100, 100]}
      label={(genderGraphData) =>
        genderGraphData.dataEntry.title +
        " " +
        genderGraphData.dataEntry.value +
        "%"
      }
      labelStyle={{
        fontSize: "5px",
        color: "#ffff",
        fontWeight: "600",
        marginLeft: ".3em",
      }}
    />
  );
}
