import {
  Avatar,
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import Helmet from "../components/Helmet";
import {
  colorsPieChartOne,
  earnings,
  leaders,
  lineChartData,
  pieChartDataOne,
  recentTransactionsData,
  sparkLineChartData,
  stackedBarChartData,
  weeklyStates,
} from "../data/data";
import EarningsBox from "../components/EarningsBox";
import IconComponent from "../components/IconComponent";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SparkLineChartComponent from "../components/SparkLine";
import StackedBarChart from "../components/StackedBarChart";
import ButtonComponent from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useThemeColor } from "../context/themeColorContext";
import { Bar, BarChart, Rectangle, Tooltip, XAxis } from "recharts";
import PieChartComponent from "../components/PieChart";
import {
  BodyTwo,
  FlexBox,
  HeadingOne,
  SubtitleOne,
  SubtitleTwo,
} from "../styles/themeStyles";
import SelectMenu from "../components/SelectMenu";
import LineChartComponent from "../components/LineChartComponent";
import { grey } from "@mui/material/colors";
import ProductFive from "../assets/images/orders/product05.jpg";
import { useCallback } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  boxShadow: "none",
  borderRadius: "12px",
}));

const mixStyles = {
  text: {
    fontSize: "1rem",
  },
  icon: { fontSize: "13px" },
  gap: { columnGap: "10px" },
};
const Ecommerce = () => {
  const { themeColor } = useThemeColor();
  const navigate = useNavigate();
  const xSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const handleClick = useCallback(() => navigate("/"), [navigate]);
  return (
    <div>
      <Helmet title="Ecommerce">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={2}
          justifyContent="center"
        >
          {earnings.map((item, index) => (
            <Grid item xs={12} sm={6} md={5} lg={5} xl={3} key={index}>
              <Item>
                <EarningsBox {...item}>
                  <IconComponent
                    color={item.iconColor}
                    bgColor={item.bgColor}
                    shadow={true}
                    width={xSmallScreen ? "45px" : "53px"}
                    height={xSmallScreen ? "45px" : "53px"}
                    borderRadius="50%"
                  >
                    <item.icon fontSize={xSmallScreen ? "small" : "medium"} />
                  </IconComponent>
                </EarningsBox>
              </Item>
            </Grid>
          ))}
          <Grid item xs={12} lg={10.5} xl={8}>
            <Item>
              <Stack
                direction="column"
                rowGap="50px"
                paddingTop={2}
                paddingBottom={4}
                paddingX={{ xs: 1, sm: 3 }}
              >
                <FlexBox
                  sx={{
                    justifyContent: { sm: "space-between" },
                  }}
                >
                  <BodyTwo>Revenue Updates</BodyTwo>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      columnGap: { xs: "10px", sm: "20px" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...mixStyles.gap,
                      }}
                    >
                      <FiberManualRecordIcon sx={{ ...mixStyles.icon }} />
                      <Typography sx={{ ...mixStyles.text }}>
                        Expense
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ...mixStyles.gap,
                      }}
                    >
                      <FiberManualRecordIcon
                        sx={{ color: "#00c853", ...mixStyles.icon }}
                      />
                      <Typography sx={{ color: "#00c853", ...mixStyles.text }}>
                        Budget
                      </Typography>
                    </Box>
                  </Box>
                </FlexBox>
                <Stack
                  direction={{ md: "row" }}
                  alignItems={"center"}
                  columnGap={{ md: "10px", lg: "15px", xl: "30px" }}
                  divider={<Divider orientation="vertical" flexItem />}
                  sx={{ paddingX: { sm: "15px", md: "20px", lg: "10px" } }}
                >
                  <Box
                    sx={{
                      flex: { md: 1 },
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "center" },
                      justifyContent: { xs: "center", md: "normal" },
                    }}
                  >
                    <Box>
                      <FlexBox
                        sx={{
                          columnGap: "15px",
                        }}
                      >
                        <HeadingOne>$93,438</HeadingOne>
                        <IconComponent
                          color="#fff"
                          bgColor="#00c853"
                          shadow={true}
                          width={xSmallScreen ? "30px" : "35px"}
                          height={xSmallScreen ? "20px" : "25px"}
                          borderRadius="20px"
                        >
                          <Typography fontSize={{ xs: 10, sm: 12 }}>
                            23%
                          </Typography>
                        </IconComponent>
                      </FlexBox>
                      <SubtitleTwo
                        sx={{
                          fontSize: { xs: "14px", sm: "16px" },
                        }}
                      >
                        Budget
                      </SubtitleTwo>
                    </Box>
                    <Box sx={{ mt: "30px", mb: "10px" }}>
                      <HeadingOne>$93,438</HeadingOne>
                      <SubtitleTwo
                        sx={{
                          fontSize: { xs: "14px", sm: "16px" },
                        }}
                      >
                        Expense
                      </SubtitleTwo>
                    </Box>
                    <FlexBox pb={3}>
                      <SparkLineChartComponent
                        height={xSmallScreen ? 150 : 160}
                        width={xSmallScreen ? 225 : 270}
                        data={sparkLineChartData}
                        area={false}
                      />
                    </FlexBox>
                    <FlexBox>
                      <ButtonComponent
                        width={"170px"}
                        handleClick={handleClick}
                      >
                        Download Report
                      </ButtonComponent>
                    </FlexBox>
                  </Box>
                  <FlexBox
                    sx={{
                      flex: { md: 1.3, lg: 1.4 },
                      justifyContent: { sm: "center" },
                    }}
                  >
                    <StackedBarChart
                      width={xSmallScreen ? 238 : 350}
                      height={xSmallScreen ? 360 : 400}
                      data={stackedBarChartData}
                      barSize={xSmallScreen ? 20 : 27}
                    />
                  </FlexBox>
                </Stack>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={9} md={6} lg={5} xl={4} rowGap={1}>
            <Item sx={{ backgroundColor: themeColor, mb: "7px" }}>
              <Box sx={{ padding: "10px 15px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "25px",
                    color: "#fff",
                  }}
                >
                  <HeadingOne sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}>
                    Earnings
                  </HeadingOne>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "3px",
                    }}
                  >
                    <HeadingOne
                      variant="h1"
                      sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }}
                    >
                      $63,448.78
                    </HeadingOne>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#eeeeee",
                        fontSize: { xs: "0.95rem", sm: "1rem" },
                      }}
                    >
                      Monthly revenue
                    </Typography>
                  </Box>
                </Box>
                <FlexBox
                  sx={{
                    justifyContent: { xs: "center", xl: "normal" },
                  }}
                >
                  <BarChart
                    data={sparkLineChartData}
                    width={xSmallScreen ? 200 : 300}
                    height={100}
                  >
                    <XAxis dataKey="x" ticks={[1, 2, 3, 4, 5]} hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        alignItems: "center",
                        columnGap: "7px",
                        borderColor: themeColor!,
                        padding: "1px 7px",
                        fontSize: "13px",
                        color: "#fff",
                      }}
                      labelFormatter={(label) => label + " :"}
                      separator=" "
                      cursor={false}
                    />
                    <Bar
                      dataKey="data"
                      fill="#fff"
                      barSize={53}
                      activeBar={<Rectangle fill={"#fff"} opacity={0.5} />}
                    />
                  </BarChart>
                </FlexBox>
              </Box>
            </Item>
            <Item>
              <FlexBox
                sx={{
                  padding: "10px 15px",
                  justifyContent: "space-around",
                }}
              >
                <FlexBox flexDirection="column" rowGap={0.5}>
                  <HeadingOne sx={{ fontSize: "1.5rem !important" }}>
                    $43,246
                  </HeadingOne>
                  <SubtitleTwo sx={{ fontSize: "16px" }}>
                    Yearly sales
                  </SubtitleTwo>
                </FlexBox>
                <FlexBox>
                  <PieChartComponent
                    width={150}
                    height={210}
                    data={pieChartDataOne}
                    COLORS={colorsPieChartOne}
                    midAngle={90}
                    innerRadius={20}
                    outerRadius={50}
                    active={2}
                    isLegend={false}
                  />
                </FlexBox>
              </FlexBox>
            </Item>
          </Grid>
          <Grid item xs={12} sm={10} md={7} lg={6} xl={5}>
            <Item>
              <Stack
                direction="column"
                paddingTop={2}
                paddingBottom={3}
                paddingX={{ xs: 1, sm: 3 }}
              >
                <Box>
                  <FlexBox sx={{ justifyContent: "space-between" }}>
                    <BodyTwo>Recent Transactions</BodyTwo>
                    <SelectMenu />
                  </FlexBox>
                  <Box paddingY={2}>
                    {recentTransactionsData.map((el, index) => (
                      <FlexBox
                        key={`el-${index}`}
                        sx={{
                          justifyContent: "space-between",
                          paddingY: "10px",
                        }}
                      >
                        <FlexBox sx={{ columnGap: { xs: "10px", sm: "15px" } }}>
                          <IconComponent
                            color={el.iconColor}
                            bgColor={el.bgColor}
                            width={xSmallScreen ? "40px" : "50px"}
                            height={xSmallScreen ? "40px" : "50px"}
                            borderRadius="8px"
                            shadow={true}
                          >
                            <el.icon
                              fontSize={xSmallScreen ? "small" : "medium"}
                            />
                          </IconComponent>
                          <Box>
                            <SubtitleOne>{el.title}</SubtitleOne>
                            <SubtitleTwo>{el.desc}</SubtitleTwo>
                          </Box>
                        </FlexBox>
                        <Box>
                          <SubtitleTwo
                            sx={{
                              color: el.color,
                              fontSize: { xs: "15px", sm: "16px" },
                            }}
                          >
                            {el.amount}
                          </SubtitleTwo>
                        </Box>
                      </FlexBox>
                    ))}
                  </Box>
                </Box>
                <Divider />
                <FlexBox
                  sx={{ justifyContent: "space-between", paddingTop: "13px" }}
                >
                  <ButtonComponent width="25px" handleClick={handleClick}>
                    Add
                  </ButtonComponent>
                  <SubtitleTwo>36 Recent Transactions</SubtitleTwo>
                </FlexBox>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={10} md={9} xl={7}>
            <Item>
              <Stack
                direction="column"
                paddingTop={2}
                paddingBottom={3}
                paddingX={{ xs: 1, sm: 3 }}
                rowGap={5}
              >
                <FlexBox sx={{ justifyContent: "space-between" }}>
                  <BodyTwo>Sales Overview</BodyTwo>
                  <SelectMenu />
                </FlexBox>
                <FlexBox sx={{ justifyContent: "center" }}>
                  <LineChartComponent data={lineChartData} />
                </FlexBox>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={9} md={6} lg={6} xl={5}>
            <Item>
              <Stack
                direction="column"
                paddingTop={2}
                paddingBottom={2}
                paddingX={{ xs: 1, sm: 3 }}
                rowGap={2.5}
              >
                <FlexBox sx={{ justifyContent: "space-between" }}>
                  <BodyTwo>Weekly Stats</BodyTwo>
                  <MoreHorizOutlinedIcon
                    sx={{
                      cursor: "pointer",
                      color: (theme) => theme.palette.grey[500],
                    }}
                  />
                </FlexBox>
                <Box>
                  {weeklyStates.map((el, index) => (
                    <FlexBox
                      key={`states-${index}`}
                      sx={{ justifyContent: "space-between", paddingY: "10px" }}
                    >
                      <FlexBox sx={{ columnGap: { xs: "10px", sm: "15px" } }}>
                        <IconComponent
                          color={el.iconColor}
                          bgColor={el.bgColor}
                          width={xSmallScreen ? "40px" : "48px"}
                          height={xSmallScreen ? "40px" : "48px"}
                          borderRadius="50%"
                          shadow={true}
                        >
                          <el.icon
                            fontSize={xSmallScreen ? "small" : "medium"}
                          />
                        </IconComponent>
                        <Box>
                          <SubtitleOne>{el.title}</SubtitleOne>
                          <SubtitleTwo>{el.desc}</SubtitleTwo>
                        </Box>
                      </FlexBox>
                      <Box>
                        <SubtitleTwo
                          sx={{
                            color: el.color,
                            fontSize: { xs: "15px", sm: "16px" },
                          }}
                        >
                          {el.amount}
                        </SubtitleTwo>
                      </Box>
                    </FlexBox>
                  ))}
                </Box>
                <FlexBox sx={{ justifyContent: "center" }}>
                  <SparkLineChartComponent
                    data={sparkLineChartData}
                    height={xSmallScreen ? 150 : 200}
                    width={xSmallScreen ? 230 : 320}
                    area={true}
                  />
                </FlexBox>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={9} md={7} lg={6} xl={7}>
            <Item>
              <Stack
                direction="column"
                paddingTop={2}
                paddingBottom={2}
                paddingX={{ xs: 1, sm: 3 }}
                rowGap={4}
              >
                <FlexBox sx={{ justifyContent: "space-between" }}>
                  <BodyTwo>Daily Activities</BodyTwo>
                  <MoreHorizOutlinedIcon
                    sx={{
                      cursor: "pointer",
                      color: (theme) => theme.palette.grey[500],
                    }}
                  />
                </FlexBox>
                <Box width="100%">
                  <img
                    src={ProductFive}
                    alt="daily activites"
                    style={{
                      width: "inherit",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <BodyTwo sx={{ fontSize: "17px !important" }}>
                    React 18 coming soon!
                  </BodyTwo>
                  <SubtitleTwo sx={{ fontSize: "0.95rem" }}>
                    By Johnathan Doe
                  </SubtitleTwo>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                  }}
                >
                  <SubtitleTwo sx={{ fontSize: "0.9rem" }}>
                    This will be the small description for the news you have
                    shown here. There could be some great info.
                  </SubtitleTwo>
                  <ButtonComponent width="120px" handleClick={handleClick}>
                    Read More
                  </ButtonComponent>
                </Box>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={9} md={6} lg={6} xl={5}>
            <Item>
              <Stack
                direction="column"
                paddingTop={2}
                paddingBottom={4}
                paddingX={{ xs: 1, sm: 3 }}
                rowGap={4}
              >
                <FlexBox sx={{ justifyContent: "space-between" }}>
                  <BodyTwo>MedicalPro Branding</BodyTwo>
                  <MoreHorizOutlinedIcon
                    sx={{
                      cursor: "pointer",
                      color: (theme) => theme.palette.grey[500],
                    }}
                  />
                </FlexBox>
                <Box>
                  <Box pb={3}>
                    <IconComponent
                      width="100px"
                      height="20px"
                      borderRadius="15px"
                      shadow={true}
                      color="#eeeeee"
                      bgColor="#ff8f00"
                    >
                      <Box sx={{ fontSize: "12px" }}>16 APR, 2021</Box>
                    </IconComponent>
                  </Box>
                  <FlexBox
                    sx={{
                      columnGap: "10px",
                      borderBottom: `1px solid ${grey[300]}`,
                    }}
                  >
                    <Box
                      sx={{
                        borderRight: `1px solid ${grey[300]}`,
                        p: "3px 10px 5px 0px",
                      }}
                    >
                      <SubtitleTwo sx={{ fontSize: "12px" }}>
                        Due Date
                      </SubtitleTwo>
                      <SubtitleOne
                        sx={{ fontWeight: 500, fontSize: "14px !important" }}
                      >
                        Oct 23, 2021
                      </SubtitleOne>
                    </Box>
                    <Box
                      sx={{
                        borderRight: `1px solid ${grey[300]}`,
                        p: "3px 10px 5px 0px",
                      }}
                    >
                      <SubtitleTwo sx={{ fontSize: "12px" }}>
                        Budget
                      </SubtitleTwo>
                      <SubtitleOne
                        sx={{ fontWeight: 500, fontSize: "14px !important" }}
                      >
                        $98,500
                      </SubtitleOne>
                    </Box>
                    <Box
                      sx={{
                        borderRight: `1px solid ${grey[300]}`,
                        p: "3px 10px 5px 0px",
                      }}
                    >
                      <SubtitleTwo sx={{ fontSize: "12px" }}>
                        Expense
                      </SubtitleTwo>
                      <SubtitleOne
                        sx={{ fontWeight: 500, fontSize: "14px !important" }}
                      >
                        $63,000
                      </SubtitleOne>
                    </Box>
                  </FlexBox>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "10px",
                      borderBottom: `1px solid ${grey[300]}`,
                      pb: "13px",
                      pt: "8px",
                    }}
                  >
                    <SubtitleOne>Teams</SubtitleOne>
                    <FlexBox sx={{ columnGap: "10px" }}>
                      <IconComponent
                        width="85px"
                        height="20px"
                        borderRadius="8px"
                        shadow={true}
                        color="#fff"
                        bgColor="#ffab40"
                      >
                        <Box sx={{ fontSize: "12px" }}>Bootstrap</Box>
                      </IconComponent>
                      <IconComponent
                        width="85px"
                        height="20px"
                        borderRadius="8px"
                        shadow={true}
                        color="#fff"
                        bgColor="#ff9e80"
                      >
                        <Box sx={{ fontSize: "12px" }}>React</Box>
                      </IconComponent>
                    </FlexBox>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "10px",
                      borderBottom: `1px solid ${grey[300]}`,
                      pb: "13px",
                      pt: "8px",
                    }}
                  >
                    <SubtitleOne>Leaders</SubtitleOne>
                    <FlexBox sx={{ columnGap: "10px" }}>
                      {leaders.map((el, index) => (
                        <Avatar
                          key={`leader-${index}`}
                          alt="leader-image"
                          src={el}
                          sx={{ width: "35px", height: "35px" }}
                        />
                      ))}
                    </FlexBox>
                  </Box>
                  <FlexBox
                    sx={{ justifyContent: "space-between", paddingTop: "13px" }}
                  >
                    <ButtonComponent width="25px" handleClick={handleClick}>
                      Add
                    </ButtonComponent>
                    <SubtitleTwo>36 Recent Transactions</SubtitleTwo>
                  </FlexBox>
                </Box>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Helmet>
    </div>
  );
};

export default Ecommerce;
