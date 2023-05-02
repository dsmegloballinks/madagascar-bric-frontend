import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
  Legend,
  Bar,
} from "recharts";

export default function BarChartGraph({ graphAnalytics }) {
  let data = [
    { uv: "12", days: "14", name: "Mon", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Tue", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Wed", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Thu", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Fri", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Sat", date: "23/67/2345" },
    { uv: "12", days: "14", name: "Sun", date: "23/67/2345" },
  ];
  return (
    <BarChart
      width={400}
      height={250}
      data={graphAnalytics}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" fontSize={12} />
      <YAxis fontSize={12} />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#0ACF66" barSize={10} radius={10} />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
}
