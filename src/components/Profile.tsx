import { Box, Divider, MenuList, useMediaQuery, useTheme } from "@mui/material";
import { adminProfileDate } from "../data/data";
import { MenuProps } from "../types/types";
import MenuComponent from "./Menu";
import AdminPhoto from "../assets/images/adminPhoto.png";
import IconComponent from "./IconComponent";
import { memo } from "react";
import {
  BodyTwo,
  FlexBox,
  SubtitleOne,
  SubtitleTwo,
} from "../styles/themeStyles";

const Profile = memo(
  ({
    title,
    openMenu,
    anchorEl,
    buttonId,
    handleClose,
    menuId,
    text,
  }: MenuProps) => {
    const theme = useTheme();
    const xSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <MenuComponent
        title={title}
        openMenu={openMenu}
        anchorEl={anchorEl}
        buttonId={buttonId}
        handleClose={handleClose}
        menuId={menuId}
        text={text}
      >
        <FlexBox
          sx={{
            columnGap: "17px",
            paddingBottom: "18px",
            paddingTop: "8px",
          }}
        >
          <img
            src={AdminPhoto}
            alt="User Photo"
            style={{
              width: xSmallScreen ? "60px" : "75px",
              height: xSmallScreen ? "60px" : "75px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            loading="lazy"
          />
          <Box>
            <BodyTwo sx={{
              [theme.breakpoints.up('xs')]: {
                fontSize: "19px"
              }
            }}>fatma syam</BodyTwo>
            <SubtitleTwo>Administrator</SubtitleTwo>
            <SubtitleTwo
              sx={{
                lineHeight: "1.1",
                fontWeight: 600,
              }}
            >
              info@Shop.com
            </SubtitleTwo>
          </Box>
        </FlexBox>
        <Divider />
        {adminProfileDate.map((el, index) => (
          <Box key={index}>
            <MenuList
              sx={{
                cursor: "pointer",
                paddingX: "10px",
                paddingY: "15px",
                "&:hover": {
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.secondary.dark : null,
                  transition: "background ease 0.1s",
                  ".MuiTypography-h5": {
                    color:
                      theme.palette.mode === "light" ? "#334155" : "#33373E",
                  },
                },
              }}
            >
              <FlexBox
                sx={{
                  columnGap: {xs: "15px",sm:"17px"},
                }}
              >
                <IconComponent
                  color={el.color}
                  bgColor={el.bgColor}
                  width="44px"
                  height="44px"
                  borderRadius="5px"
                  shadow={false}
                >
                  <el.icon fontSize="medium" />
                </IconComponent>
                <Box>
                  <SubtitleOne
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    {el.title}
                  </SubtitleOne>
                  <SubtitleTwo sx={{ lineHeight: "1.1" }}>
                    {el.subTitle}
                  </SubtitleTwo>
                </Box>
              </FlexBox>
            </MenuList>
            <Divider />
          </Box>
        ))}
      </MenuComponent>
    );
  }
);

export default Profile;
