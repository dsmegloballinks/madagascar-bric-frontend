import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Male", value: 45 },
  { name: "Female", value: 55 },
];

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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.19;
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

export default function PieChartGraph() {
  var demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj";

  return (
    // <ResponsiveContainer width="400" height="400">
    <PieChart
      width={200}
      height={400}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    // </ResponsiveContainer>
  );
}

// import {
//   RadialBarChart,
//   RadialBar,
//   Tooltip,
//   PieChart,
//   Pie,
//   Label,
// } from "recharts";
// import { Chart } from "react-google-charts";

// export const data = [
//   // ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   title: "My Daily Activities",
// };

// export default function PieChartGraph() {
//   // const data = [
//   //   {
//   //     name: "Male",
//   //     value: 400,
//   //     fill: "#FF6161",
//   //   },
//   //   {
//   //     name: "Female",
//   //     value: 300,
//   //     fill: "#0ACF66",
//   //   },
//   // ];

//   return (
//     <Chart
//       chartType="PieChart"
//       data={data}
//       options={options}
//       width={"100%"}
//       height={"400px"}
//     />
//     // <PieChart width={220} height={250}>
//     //   <Pie
//     //     data={data}
//     //     dataKey="value"
//     //     nameKey="name"
//     //     cx="50%"
//     //     cy="50%"
//     //     innerRadius={60}
//     //     outerRadius={80}
//     //     // fill="#82ca9d"
//     //     label={({
//     //       cx,
//     //       cy,
//     //       midAngle,
//     //       innerRadius,
//     //       outerRadius,
//     //       value,
//     //       index,
//     //     }) => {
//     //       console.log("handling label?");
//     //       const RADIAN = Math.PI / 180;
//     //       // eslint-disable-next-line
//     //       const radius = 25 + innerRadius + (outerRadius - innerRadius);
//     //       // eslint-disable-next-line
//     //       const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     //       // eslint-disable-next-line
//     //       const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     //       return (
//     //         <text
//     //           x={x}
//     //           y={y}
//     //           fill={data[index].fill}
//     //           textAnchor={x > cx ? "start" : "end"}
//     //           dominantBaseline="central"
//     //         >
//     //           {data[index].name} {value}
//     //         </text>
//     //       );
//     //     }}
//     //   />
//     // </PieChart>
//   );
// }
