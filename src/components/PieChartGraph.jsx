import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { PieChart } from "react-minimal-pie-chart";

var data = [];

const COLORS = ["#0ACF66", "#FF6161"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.05;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}% ${data[index].name}`}
    </text>
  );
};

export default function PieChartGraph({ genderGraphData }) {
  console.log("genderGraphData", genderGraphData);
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
    // <PieChart
    //   width={300}
    //   height={300}
    //   margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    // >
    //   <Pie
    //     data={genderGraphData}
    //     cx="50%"
    //     cy="50%"
    //     labelLine={false}
    //     label={renderCustomizedLabel}
    //     outerRadius={100}
    //     fill="#8884d8"
    //     dataKey="value"
    //   >
    //     {data.map((entry, index) => (
    //       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
    //     ))}
    //   </Pie>
    // </PieChart>
  );
}
