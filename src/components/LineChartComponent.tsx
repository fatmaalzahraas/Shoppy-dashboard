import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CommitIcon from '@mui/icons-material/Commit';
import { lineChartLabels } from "../data/data";
import { memo} from "react";
import CustomLegend from "./CustomLegend";
import { useMediaQuery, useTheme } from "@mui/material";
import useChartLabels from "../custom-hooks/useChartLabels";
type Props = {
  data: { name: number; Egypt: number; US: number; Turkey: number }[];
};
const LineChartComponent = memo(({ data }: Props) => {
  const {chartProps, setChartProps, hideTicks} = useChartLabels(lineChartLabels)
  const theme = useTheme();
  const xSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ResponsiveContainer width={"97%"} height={430}>
      <LineChart data={data}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="name"
        tick={hideTicks} 
        fontSize={12}
        axisLine={false}
        tickMargin={10}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        ticks={[0, 20, 40, 60, 80, 100]}
        tickFormatter={(value) => `${value}%`}
        tick={{ fontSize: "12px" }}
        tickMargin={5}
      />
      <Tooltip
        contentStyle={{ fontSize: "13px" }}
        formatter={(value) => `${value}%`}
        labelStyle={{ fontWeight: 600 , color: '#616161'}}
        itemStyle={{ padding: "3px 0" }}
      />
      <Legend
        content={
          <CustomLegend
            payload={lineChartLabels}
            chartProps={chartProps}
            setChartProps={setChartProps}
            icon={<CommitIcon fontSize="small"/>}
          />
        }
      />
      {lineChartLabels.map((label, index) => (
        <Line
          type="linear"
          key={`line-${index}`}
          dataKey={label.value}
          stroke={label.color}
          strokeWidth={2}
          dot={{ r: xSmallScreen ? 3 : 4 }}
          activeDot={{ r: xSmallScreen? 4 : 4.5, stroke: label.color, fill: "#fff" }}
          hide={chartProps[label.value] === true}
        />
      ))}
    </LineChart>
    </ResponsiveContainer>
  );
});

export default LineChartComponent;
