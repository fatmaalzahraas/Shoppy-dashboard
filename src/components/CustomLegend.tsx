import { Payload } from "recharts/types/component/DefaultLegendContent";
import { ChartPropsType } from "../types/types";
import { Box, Stack } from "@mui/material";
import { SubtitleTwo } from "../styles/themeStyles";
import { memo } from "react";

type LegendProps = {
  payload: Payload[];
  chartProps: ChartPropsType;
  setChartProps: React.Dispatch<React.SetStateAction<ChartPropsType>>;
  icon: React.ReactElement;
};
const CustomLegend = memo(({
  payload,
  chartProps,
  setChartProps,
  icon,
}: LegendProps) => {
  const handleClick = (value: string) => {
    setChartProps({
      ...chartProps,
      [value]: !chartProps[value],
    });
  };
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" mt={2}>
      {payload.map((entry) => (
        <Box
          key={`legend-item-${entry.value}`}
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
            opacity: chartProps[entry.value] ? "0.5" : "1",
            cursor: "pointer",
          }}
          onClick={() => handleClick(entry.value)}
        >
          <Box sx={{ color: entry.color, fontSize: "17px", display: 'flex', alignItems: 'center' }}>{icon}</Box>
          <SubtitleTwo
            sx={{ color: entry.color, fontSize: { xs: "12px", sm: "13px" } }}
          >
            {entry.value}
          </SubtitleTwo>
        </Box>
      ))}
    </Stack>
  );
});

export default CustomLegend;
