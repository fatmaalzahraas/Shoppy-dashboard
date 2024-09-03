import { Box } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { BodyTwo, FlexBox, PageBox } from "../styles/themeStyles";
import {
  Bar,
  BarChart,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { barChartData, barChartLabels } from "../data/data";
import useChartLabels from "../custom-hooks/useChartLabels";
import CustomLegend from "../components/CustomLegend";
import BarChartIcon from "@mui/icons-material/BarChart";

const BarChartPage = () => {
  const { chartProps, setChartProps, hideTicks } =
    useChartLabels(barChartLabels);
  return (
    <Helmet title="Bar">
      <PageBox>
        <Header title="Bar" category="Chart" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "1.8rem" } }}>
          <FlexBox justifyContent="center" pb={6}>
            <BodyTwo sx={{ fontWeight: 500 }}>
              Olympic Medal Counts - RIO
            </BodyTwo>
          </FlexBox>
          <Box>
            <ResponsiveContainer width={"97%"} height={430}>
              <BarChart data={barChartData} barGap={0}>
                <XAxis
                  dataKey="name"
                  tick={hideTicks}
                  fontSize={12}
                  tickMargin={10}
                  axisLine={{ stroke: "#bdbdbd" }}
                  tickLine={hideTicks}
                />
                <Legend
                  content={
                    <CustomLegend
                      payload={barChartLabels}
                      chartProps={chartProps}
                      setChartProps={setChartProps}
                      icon={<BarChartIcon fontSize="small" />}
                    />
                  }
                />
                <Tooltip
                  cursor={false}
                  contentStyle={{
                    color: "#616161",
                    fontSize: "13px",
                    padding: "6px 10px",
                  }}
                  labelStyle={{ fontWeight: 600 }}
                  itemStyle={{ padding: "3px 0" }}
                />
                {barChartLabels.map((label, index) => (
                  <Bar
                    key={`bar-group-${index}`}
                    dataKey={label.value}
                    fill={label.color}
                    label={{
                      fill: "#fff",
                      fontSize: "12px",
                      position: "insideTop",
                      offset: 8,
                    }}
                    activeBar={<Rectangle fill={label.color} opacity={0.5} />}
                    hide={chartProps[label.value] === true}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default BarChartPage;
