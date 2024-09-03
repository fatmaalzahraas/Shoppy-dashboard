import { Box, Theme, useMediaQuery } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { BodyTwo, FlexBox, PageBox } from "../styles/themeStyles";
import PieChartComponent from "../components/PieChart";
import { ResponsiveContainer } from "recharts";
import { colorsPieChartTwo, pieChartDataTwo } from "../data/data";

const PieChartPage = () => {
  const smScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("sm")
  );
  const xsScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xs")
  );
  const xSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.only("xsm")
  );
  return (
    <Helmet title="Pie">
      <PageBox>
        <Header title="Pie" category="Chart" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "1.8rem" } }}>
          <FlexBox justifyContent="center" pb={4}>
            <BodyTwo sx={{ fontWeight: 500 }}>Project Cost Breakdown</BodyTwo>
          </FlexBox>
          <FlexBox justifyContent={"space-around"}>
            <ResponsiveContainer
              width={xsScreen ? "97%" : smScreen ? "90%" : "70%"}
              height={xsScreen ? 400 : 430}
            >
              <PieChartComponent
                isLegend
                data={pieChartDataTwo}
                COLORS={colorsPieChartTwo}
                midAngle={0}
                innerRadius={
                  xsScreen ? 35 : xSmallScreen ? 40 : smScreen ? 50 : 60
                }
                outerRadius={
                  xsScreen ? 90 : xSmallScreen ? 105 : smScreen ? 130 : 150
                }
                active={5}
              />
            </ResponsiveContainer>
          </FlexBox>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default PieChartPage;
