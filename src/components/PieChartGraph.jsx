import { RadialBarChart, RadialBar, Tooltip } from "recharts";

export default function PieChartGraph() {
  const data = [
    {
      uv: 3,
      pv: 100,
      fill: "#0ACF66",
    },
  ];

  return (
    <RadialBarChart
      width={200}
      height={250}
      cx={100}
      cy={100}
      innerRadius={70}
      outerRadius={100}
      barSize={20}
      data={data}
      endAngle={360}
    >
      <RadialBar minAngle={15} background clockWise dataKey="uv"></RadialBar>

      <text
        x={100}
        y={100}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress_label_Text_style"
      >
        100% Verified
      </text>
      <Tooltip />
    </RadialBarChart>
  );
}
