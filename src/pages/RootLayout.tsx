import { useEffect, useState, useCallback} from "react";
import { Outlet } from "react-router-dom";
import {
  Badge,
  useMediaQuery,
  styled,
  useTheme,
  Box,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Theme,
  Tooltip,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AdminPhoto from "../assets/images/adminPhoto.png";
import Sidebar from "../components/Sidebar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SettingsInfo from "../components/SettingsInfo";
import { useThemeColor } from "../context/themeColorContext";
import CartItems from "../components/CartItems";
import ChatComponent from "../components/NotificationandChat";
import Profile from "../components/Profile";
const drawerWidth = 280;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.down('xl')]: {
    paddingX: theme.spacing(0)
  },
  [theme.breakpoints.down("lg")]: {
    marginLeft: 0,
  },
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.down("md")]: {
      width: `100%`,
    },
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const menuColors = (theme: Theme, colorTheme: string | null) => {
  return {
    color: colorTheme,
    padding: "11px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  };
};
const RootLayout = () => {
  const { themeColor } = useThemeColor();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const mobileScreen = useMediaQuery(theme.breakpoints.between("xs", "xsm"));
  const [open, setOpen] = useState(smallScreen ? false : true);
  const [dialogSettingOpen, setDialogSettingOpen] = useState(false);
  const [dialogCartOpen, setDialogCartOpen] = useState(false);
  const [chatEl, setChatEl] = useState<null | HTMLElement>(null);
  const [notificationEl, setNotificationEl] = useState<null | HTMLElement>(
    null
  );
  const [profileEl, setProfileEl] = useState<null | HTMLElement>(null);
  const openMenuChat = Boolean(chatEl);
  const openMenuNotification = Boolean(notificationEl);
  const openMenuProfile = Boolean(profileEl);
  const yearNow = new Date().getFullYear();

  const handleClickMenuChat = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (openMenuNotification) {
      setNotificationEl(null);
    } else if (openMenuProfile) {
      setProfileEl(null);
    }
    setChatEl(event.currentTarget);
  };
  const handleClickMenuNotification = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (openMenuChat) {
      setChatEl(null);
    } else if (openMenuProfile) {
      setProfileEl(null);
    }
    setNotificationEl(event.currentTarget);
  };
  const handleClickMenuProfile = (event: React.MouseEvent<HTMLElement>) => {
    if (openMenuChat) {
      setChatEl(null);
    } else if (openMenuNotification) {
      setNotificationEl(null);
    }
    setProfileEl(event.currentTarget);
  };
  const handleCloseMenuChat = useCallback(() => {
    setChatEl(null);
  }, []);
  const handleCloseMenuNotification = useCallback(() => {
    setNotificationEl(null);
  }, []);
  const handleCloseMenuProfile = useCallback(() => {
    setProfileEl(null);
  }, []);
  useEffect(() => {
    setOpen(!smallScreen);
  }, [smallScreen]);
  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
    setChatEl(null);
    setNotificationEl(null);
    setProfileEl(null);
  };

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleDialogClose = useCallback(() => {
    setDialogSettingOpen(false);
    setDialogCartOpen(false);
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          color="inherit"
          elevation={0}
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: {xs: open ? 'none': 'inline-flex', lg: 'inline-flex'}
          }}
        >
          <Toolbar>
            <Tooltip title="Menu" arrow>
              <IconButton
                disableRipple
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                sx={{
                  mr: 2,
                  ...menuColors(theme, themeColor),
                }}
              >
                <MenuIcon fontSize= {mobileScreen ? "small" : "medium"}/>
              </IconButton>
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Cart" arrow>
                <IconButton
                  disableRipple
                  aria-label="show shopping cart"
                  color="inherit"
                  sx={{
                    ...menuColors(theme, themeColor),
                  }}
                  onClick={() => {
                    setDialogCartOpen(true);
                    setNotificationEl(null);
                    setChatEl(null);
                    setProfileEl(null);
                  }}
                >
                  <Badge badgeContent={0} color="error">
                    <ShoppingCartOutlinedIcon fontSize= {mobileScreen ? "small" : "medium"}/>
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Chat" arrow>
                <IconButton
                  id="chat-button"
                  aria-haspopup="true"
                  aria-controls={openMenuChat ? "chat-menu" : undefined}
                  aria-expanded={openMenuChat ? "true" : undefined}
                  disableRipple
                  
                  aria-label="show new messages"
                  sx={{
                    ...menuColors(theme, themeColor),
                  }}
                  onClick={handleClickMenuChat}
                >
                  <Badge variant="dot" color="error">
                    <ChatBubbleOutlineOutlinedIcon fontSize= {mobileScreen ? "small" : "medium"} />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="Notifications" arrow>
                <IconButton
                  id="notification-button"
                  aria-haspopup="true"
                  aria-controls={
                    openMenuNotification ? "notification-menu" : undefined
                  }
                  aria-expanded={openMenuNotification ? "true" : undefined}
                  disableRipple
                  aria-label="show new notifications"
                  sx={{
                    ...menuColors(theme, themeColor),
                  }}
                  onClick={handleClickMenuNotification}
                >
                  <Badge
                    variant="dot"
                    sx={{
                      "& .MuiBadge-dot": {
                        backgroundColor: "#fec90f",
                      },
                    }}
                  >
                    <NotificationsNoneOutlinedIcon fontSize= {mobileScreen ? "small" : "medium"}/>
                  </Badge>
                </IconButton>
              </Tooltip>
              <List>
                <ListItem disablePadding>
                  <Tooltip title="Profile" arrow>
                    <ListItemButton
                      disableRipple
                      sx={{
                        "&:hover": {
                          backgroundColor: theme.palette.secondary.dark,
                          borderRadius: "8px",
                          ".MuiSvgIcon-root": {
                            color: theme.palette.grey[600]
                          }
                        },
                      }}
                      id="profile-button"
                      aria-haspopup="true"
                      aria-controls={openMenuProfile ? "chat-menu" : undefined}
                      aria-expanded={openMenuProfile ? "true" : undefined}
                      onClick={handleClickMenuProfile}
                    >
                      <ListItemAvatar sx={{ minWidth: {xs: '40px',sm:"47px"} }}>
                        <Avatar
                          alt="User Photo"
                          src={AdminPhoto}
                          sx={{
                            width: {xs: '33px',sm:"38px"},
                            height: {xs:'33px',sm:"38px"},
                            objectFit: "cover",
                            borderRadius: '50%'
                          }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box
                            sx={{
                              display: {xs: 'none',sm: "flex"},
                              columnGap: "2px",
                              textTransform: "capitalize",
                            }}
                          >
                            <Typography
                              variant="body1"
                              fontSize="0.95rem"
                              sx={{ color: theme.palette.secondary.light }}
                            >
                              hi,{" "}
                            </Typography>
                            <Typography
                              fontSize="0.95rem"
                              sx={{ fontWeight: "700", color: theme.palette.secondary.light }}
                              variant="body1"
                            >
                              {" "}
                              fatma
                            </Typography>
                          </Box>
                        }
                      />
                      <ExpandMore sx={{ paddingLeft: "3px" }} fontSize= {mobileScreen ? "small" : "medium"}/>
                    </ListItemButton>
                  </Tooltip>
                </ListItem>
              </List>
            </Box>
          </Toolbar>
        </AppBar>
        <Sidebar
          drawerWidth={drawerWidth}
          smallScreen={smallScreen}
          open={open}
          handleDrawerClose={handleDrawerClose}
         
        />
        <Main
          open={open}
          sx={{
            backgroundColor: theme.palette.primary.main,
            minHeight: 'calc(100vh - 73px)',
          }}
          
        >
          <Box sx={{  paddingTop: '55px', paddingBottom: '30px', paddingX: {xs: '5px',sm:'30px'} ,minHeight: 'inherit' }}>
            <Outlet />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              color: theme.palette.secondary.contrastText,
            }}
          >
            © {yearNow} All rights reserved by Shoppy.com
          </Box>
          <Tooltip title="Settings" arrow>
            <IconButton
              disableRipple
              aria-label="Settings"
              sx={{
                position: "fixed",
                right: "20px",
                bottom: {xs: "25px",sm:"20px"},
                zIndex: '10',
                backgroundColor: themeColor,
                color: "white",
                "&:hover": {
                  backgroundColor: themeColor,
                  color: "white",
                  boxShadow:
                    "0px 10px 25px 0px rgb(113 122 131 / 11%) , 0px 8px 15px 0px rgb(113 122 131 / 11%)",
                },
              }}
              onClick={() => setDialogSettingOpen(true)}
            >
              <SettingsOutlinedIcon fontSize= {mobileScreen ? "medium" : "large"} />
            </IconButton>
          </Tooltip>
        </Main>
      </Box>
      <SettingsInfo open={dialogSettingOpen} handleClose={handleDialogClose} />
      <CartItems open={dialogCartOpen} handleClose={handleDialogClose} />

      <ChatComponent
        show={true}
        openMenu={openMenuChat}
        anchorEl={chatEl}
        title="Messages"
        menuId="chat-menu"
        buttonId="chat-button"
        handleClose={handleCloseMenuChat}
        text="See all messages"
      />
      <ChatComponent
        show={false}
        openMenu={openMenuNotification}
        anchorEl={notificationEl}
        title="Notifications"
        menuId="notification-menu"
        buttonId="notification-button"
        handleClose={handleCloseMenuNotification}
        text="See all notifications"
      />
      <Profile
        openMenu={openMenuProfile}
        anchorEl={profileEl}
        title="User Profile"
        menuId="profile-menu"
        buttonId="profile-button"
        handleClose={handleCloseMenuProfile}
        text="Logout"
      />
    </>
  );
};

export default RootLayout;
