import { Box, Divider, MenuList, useTheme } from "@mui/material";
import { ChatContent } from "../data/data";
import MenuComponent from "./Menu";
import { memo } from "react";
import { MenuProps } from "../types/types";
import { FlexBox, SubtitleOne, SubtitleTwo } from "../styles/themeStyles";

type Props = MenuProps & {
  show: boolean;
};

const ChatComponent = memo(
  ({
    show,
    title,
    openMenu,
    anchorEl,
    buttonId,
    handleClose,
    menuId,
    text,
  }: Props) => {
    const theme = useTheme();

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
        {ChatContent.map((el, index) => (
          <Box key={index}>
            <MenuList
              sx={{
                cursor: "pointer",
                paddingX: { xs: "2px", sm: "10px" },
                "&:hover": {
                  backgroundColor: theme.palette.mode === 'light' ? theme.palette.secondary.dark : null,
                  transition: "background ease 0.1s",
                  ".MuiTypography-subtitle1": {
                    color:
                      theme.palette.mode === "light" ? "#334155" : "#33373E",
                  },
                },
              }}
            >
              <FlexBox
                sx={{
                  columnGap: { xs: "10px", sm: "20px" },
                }}
              >
                <FlexBox
                  sx={{
                    width: { xs: "42px", sm: "50px" },
                    height: { xs: "42px", sm: "50px" },
                  }}
                >
                  <img
                    src={el.image}
                    alt={el.message}
                    style={{
                      width: "inherit",
                      height: "inherit",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </FlexBox>
                <Box>
                  <SubtitleOne sx={{ mb: { sm: "4px" } }}>
                    {el.message}
                  </SubtitleOne>
                  <SubtitleTwo>{el.desc}</SubtitleTwo>
                  {show && <SubtitleTwo>{el.time}</SubtitleTwo>}
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

export default ChatComponent;
