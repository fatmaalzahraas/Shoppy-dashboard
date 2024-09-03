import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import BarChartIcon from "@mui/icons-material/BarChart";
import { memo } from "react";
import { stackedBarLabels } from "../data/data";
import CustomLegend from "./CustomLegend";
import useChartLabels from "../custom-hooks/useChartLabels";

type Props = {
  data: { name: string; Expense: number; Budget: number }[];
  barSize?: number;
  width?: number;
  height?: number;
};

const StackedBarChart = memo(({ width, height, data, barSize }: Props) => {
  const { chartProps, setChartProps, hideTicks } =
    useChartLabels(stackedBarLabels);
  return (
    <BarChart data={data} width={width} height={height}>
      <CartesianGrid vertical={false} horizontalValues={[100, 200, 300, 400]} />
      <XAxis
        dataKey="name"
        tick={hideTicks}
        fontSize={12}
        fontWeight={500}
        tickLine={false}
        tickMargin={6}
        axisLine={false}
      />
      <YAxis
        type="number"
        allowDataOverflow={true}
        domain={[100, "dataMax + 80.2"]}
        tickCount={4}
        axisLine={false}
        tickLine={false}
        ticks={[100, 200, 300, 400]}
        tick={{ fontSize: "12px", fontWeight: "500" }}
      />
      <Tooltip
        contentStyle={{
          color: "#616161",
          fontSize: "13px",
          padding: "6px 10px",
        }}
        labelStyle={{ fontWeight: 600 }}
        itemStyle={{ padding: "3px 0" }}
        cursor={false}
      />
      <Legend
        content={
          <CustomLegend
            payload={stackedBarLabels}
            chartProps={chartProps}
            setChartProps={setChartProps}
            icon={<BarChartIcon fontSize="small" />}
          />
        }
      />
      {stackedBarLabels.map((label, index) => (
        <Bar
          key={`bar-${index}`}
          dataKey={label.value}
          stackId="a"
          fill={label.color}
          barSize={barSize}
          hide={chartProps[label.value] === true}
          activeBar={<Rectangle fill={label.color} opacity={0.5} />}
        />
      ))}
    </BarChart>
  );
});

export default StackedBarChart;
