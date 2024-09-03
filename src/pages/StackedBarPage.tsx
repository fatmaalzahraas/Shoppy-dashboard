import { Box } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { BodyTwo, FlexBox, PageBox } from "../styles/themeStyles";
import { ResponsiveContainer } from "recharts";
import StackedBarChart from "../components/StackedBarChart";
import { stackedBarChartData } from "../data/data";

const StackedBarPage = () => {
  return (
    <Helmet title="Stacked">
      <PageBox>
        <Header title="Stacked" category="Chart" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "1.8rem" } }}>
          <FlexBox justifyContent="center" pb={6}>
            <BodyTwo sx={{ fontWeight: 500 }}>Revenue Breakdown</BodyTwo>
          </FlexBox>
          <Box>
            <ResponsiveContainer width={"97%"} height={550}>
              <StackedBarChart data={stackedBarChartData} />
            </ResponsiveContainer>
          </Box>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default StackedBarPage;
