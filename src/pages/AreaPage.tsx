import { Box } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { BodyTwo, FlexBox, PageBox } from "../styles/themeStyles";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { areaChartData, areaChartLabels } from "../data/data";
import CustomLegend from "../components/CustomLegend";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import useChartLabels from "../custom-hooks/useChartLabels";
const AreaChartPage = () => {
  const { chartProps, setChartProps, hideTicks } =
    useChartLabels(areaChartLabels);

  return (
    <Helmet title="Area">
      <PageBox>
        <Header title="Area" category="Chart" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "1.8rem" } }}>
          <FlexBox justifyContent="center" pb={6}>
            <BodyTwo sx={{ fontWeight: 500 }}>
              Inflation Rate in percentage
            </BodyTwo>
          </FlexBox>
          <Box>
            <ResponsiveContainer width={"97%"} height={430}>
              <AreaChart data={areaChartData}>
                <defs>
                  {areaChartLabels.map((label, index) => (
                    <linearGradient
                      key={`area-${index}`}
                      id={`color${label.value}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor={label.color}
                        stopOpacity={0.85}
                      />
                      <stop
                        offset="95%"
                        stopColor={label.color}
                        stopOpacity={0.85}
                      />
                    </linearGradient>
                  ))}
                </defs>
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
                  ticks={[0, 1, 2, 3, 4]}
                  tickFormatter={(value) => `${value}%`}
                  tick={{ fontSize: "12px" }}
                  tickMargin={5}
                />
                <Legend
                  content={
                    <CustomLegend
                      payload={areaChartLabels}
                      chartProps={chartProps}
                      setChartProps={setChartProps}
                      icon={<StackedLineChartIcon fontSize="small" />}
                    />
                  }
                />
                {areaChartLabels.map((label, index) => (
                  <Area
                    key={`area-${index}`}
                    type="natural"
                    dataKey={label.value}
                    stroke={label.color}
                    fillOpacity={1}
                    fill={`url(#color${label.value})`}
                    hide={chartProps[label.value] === true}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default AreaChartPage;
