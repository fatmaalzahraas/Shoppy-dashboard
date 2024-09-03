import { Box, Theme, useMediaQuery } from "@mui/material";
import { memo, useCallback, useState } from "react";
import { PieChart, Pie, Cell, Sector, Tooltip, Legend } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { ContentType } from "recharts/types/component/Tooltip";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import { ActiveShape } from "recharts/types/util/types";
import { SubtitleOne } from "../styles/themeStyles";

type PieChartProps = {
  data: { name: string; value: number }[];
  COLORS: string[];
  innerRadius: number;
  outerRadius: number;
  midAngle: number;
  active: number;
  isLegend: boolean;
  width?: number;
  height?: number;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.53;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "0.65rem" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const RenderActiveShape: ActiveShape<PieSectorDataItem> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
}: PieSectorDataItem) => {
  const radius = innerRadius! + (outerRadius! - innerRadius!) * -0.5;
  const x = cx! + radius * Math.cos(-midAngle! * RADIAN);
  const y = cy! + radius * Math.sin(-midAngle! * RADIAN);

  return (
    <Sector
      cx={x}
      cy={y}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  );
};

const CustomTooltip: ContentType<ValueType, NameType> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const { name, value, payload: color } = payload[0];

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: "7px",
          padding: "3px 5px",
          border: `1px solid #e0e0e0`,
          backgroundColor: "#FFF",
          borderRadius: "2px",
        }}
      >
        <SubtitleOne sx={{ color: color.fill, fontSize: "12px !important" }}>
          {name} :
        </SubtitleOne>
        <SubtitleOne sx={{ fontSize: "12px !important", color: "#616161" }}>
          {((value as number) * 100).toFixed(0)}%
        </SubtitleOne>
      </Box>
    );
  }
};
const PieChartComponent = memo(
  ({
    width,
    height,
    data,
    COLORS,
    midAngle,
    innerRadius,
    outerRadius,
    active,
    isLegend,
  }: PieChartProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(active);
    const xsScreen = useMediaQuery((theme: Theme) =>
      theme.breakpoints.down("md")
    );
    const onPieClick = useCallback(
      (_: number, index: number) => {
        if (activeIndex === index) {
          setActiveIndex(null);
        } else {
          setActiveIndex(index);
        }
      },
      [activeIndex]
    );
    return (
      <PieChart width={width} height={height}>
        <Tooltip content={CustomTooltip} />
        {isLegend && (
          <Legend
            align={xsScreen ? "center" : "right"}
            verticalAlign={xsScreen ? "bottom" : "middle"}
            layout={xsScreen ? "horizontal" : "vertical"}
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ fontSize: "14px" }}
          />
        )}
        <Pie
          data={data}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          dataKey="value"
          paddingAngle={0}
          label={renderCustomizedLabel}
          labelLine={false}
          style={{ outline: "none", stroke: "none" }}
          onClick={onPieClick}
          minAngle={midAngle}
          activeIndex={activeIndex!}
          activeShape={RenderActiveShape}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
);

export default PieChartComponent;
