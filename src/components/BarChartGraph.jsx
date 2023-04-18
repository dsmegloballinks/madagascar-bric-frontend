import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Legend,
  Bar,
} from "recharts";

export default function BarChartGraph() {
  let data = [
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
    { uv: "12", pv: "14", name: "" },
  ];
  return (
    <BarChart
      width={400}
      height={250}
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" fontSize={12} />
      <YAxis fontSize={12} />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#0ACF66" barSize={10} radius={10} />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
}
