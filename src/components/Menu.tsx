import { IconButton, Menu, useMediaQuery } from "@mui/material";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import { useTheme } from "@mui/material";
import { memo } from "react";
import ButtonComponent from "./Button";
import { MenuProps } from "../types/types";
import { BodyTwo, FlexBox } from "../styles/themeStyles";
type MenuComponentProps = MenuProps & {
  children: React.ReactNode;
};

const MenuComponent = memo(
  ({
    children,
    title,
    openMenu,
    anchorEl,
    buttonId,
    handleClose,
    menuId,
    text,
  }: MenuComponentProps) => {
    const theme = useTheme();
    const xsScreen = useMediaQuery(theme.breakpoints.between("xs", "xsm"))
    return (
      <Menu
        open={openMenu}
        anchorEl={anchorEl}
        id={menuId}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": buttonId }}
        style={{ top: xsScreen ? "55px" :"55px", height: "500px" }}
        hideBackdrop
        sx={{
          "& .MuiPaper-root": {
            minWidth: "180px",
            width: { xs: "88%", sm: "350px" },
            maxHeight: { xs: "85vh",sm: "95vh"}, 
            borderRadius: "6px",
            backgroundColor: theme.palette.secondary.main,
            "& .MuiMenu-list": {
              padding: "40px 30px" ,
            },
          },
        }}
      >
        <FlexBox sx={{ mb: "25px" }}>
          <BodyTwo>{title}</BodyTwo>
          <IconButton
            aria-label="close"
            disableRipple
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              color: theme.palette.secondary.light,
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            <DisabledByDefaultOutlinedIcon />
          </IconButton>
        </FlexBox>
        {children}
        <FlexBox sx={{ pt: "20px", justifyContent: 'center' }}>
          <ButtonComponent width={xsScreen ? "95%" : "100%"} handleClick={handleClose}>
            {text}
          </ButtonComponent>
        </FlexBox>
      </Menu>
    );
  }
);

export default MenuComponent;
