import { Box } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { BodyTwo, FlexBox, PageBox } from "../styles/themeStyles";
import LineChartComponent from "../components/LineChartComponent";
import { lineChartData } from "../data/data";

const Line = () => {
  return (
    <Helmet title="Line">
      <PageBox>
        <Header title="Line" category="Chart" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "1.8rem" } }}>
          <FlexBox justifyContent="center" pb={6}>
            <BodyTwo sx={{ fontWeight: 500 }}>Inflation Rate</BodyTwo>
          </FlexBox>
          <Box>
            <LineChartComponent data={lineChartData} />
          </Box>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default Line;
