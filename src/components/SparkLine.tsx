import { Line, Tooltip, XAxis, Area, ComposedChart} from "recharts";
import { useThemeColor } from "../context/themeColorContext";
import { memo } from "react";
type Props = {
  width: number,
  height: number;
  data: {
    x: number;
    data: number;
  }[];
  area: boolean;
};
const SparkLineChartComponent = memo(({ width, height, data, area }: Props) => {
  const { themeColor } = useThemeColor();
  return (
    
       <ComposedChart  data={data} width={width} height={height}>
      <XAxis dataKey="x" hide/>
      <Line
        type="linear"
        dataKey="data"
        stroke={themeColor!}
        dot={area ? false : { fill: themeColor!, r: 2 }}
        activeDot={area ? false : true}
        strokeWidth={area ? 2 : 1}
      />
      {area && <Area type="linear" dataKey="data" stroke={themeColor!} fill="#03a9f4" tooltipType="none" fillOpacity={0.1} activeDot={area ? false : true}/>}
      <Tooltip
        itemStyle={{ color: "#fff" }}
        contentStyle={{
          display: "flex",
          alignItems: "center",
          columnGap: "7px",
          color: "#fff",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "1px 7px",
          fontSize: "13px",
          borderColor: "#fff",
          borderRadius: '2px'
        }}
        separator=" "
        labelFormatter={(label) => label + " :"}
      />
    </ComposedChart>
   
   
  );
});
export default SparkLineChartComponent;
