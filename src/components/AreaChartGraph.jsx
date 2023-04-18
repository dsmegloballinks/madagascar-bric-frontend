import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";

export default function AreaChartGraph() {
  const data = [
    {
      name: "Child A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Child B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Child C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Child D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Child E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Child F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Child G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <AreaChart
      width={930}
      height={250}
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient> */}
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0ACF66" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#0ACF66" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" fontSize={12} />
      <YAxis fontSize={12} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      {/* <Area
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      /> */}
      <Area
        type="monotone"
        dataKey="pv"
        stroke="#0ACF66"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}
