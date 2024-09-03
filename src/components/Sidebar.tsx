import { useEffect, useState, memo } from "react";
import {
  styled,
  Drawer,
  Typography,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { sidebarLinks } from "../data/data";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { useThemeColor } from "../context/themeColorContext";
import { FlexBox } from "../styles/themeStyles";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type SidebarProps = {
  drawerWidth: number;
  smallScreen: boolean;
  open: boolean;
  handleDrawerClose: () => void;
};

const Sidebar =
  memo(({
    drawerWidth,
    smallScreen,
    open,
    handleDrawerClose,
   
  }: SidebarProps) => {
    const theme = useTheme();
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const {themeColor} = useThemeColor()
    const navigate = useNavigate();
    const handleLinkClick = (_ : unknown, index: number,link: string) => {
      setSelectedIndex(index);
      navigate(`${link}`);
    };
    useEffect(() => {
        if (selectedIndex === null) {
          navigate('/')
        }
    },[navigate, selectedIndex])
    return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 0,
            boxShadow: smallScreen
              ? "none"
              : "rgb(113 122 131 / 11%) 0px 7px 30px 0px",
            padding: "5px 8px 40px 13px",
            backgroundColor: theme.palette.secondary.main,
            overflowY: smallScreen || isHovered ? "auto" : "hidden",
            transition: "all 0.2s",
          },
        }}
        variant={smallScreen ? "temporary" : "persistent"}
        anchor="left"
        open={open}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <DrawerHeader sx={{ justifyContent: "space-between", mb: "8px" }}>
          <Typography variant="h2" sx={{ fontWeight: 700, paddingLeft: "5px", cursor: 'pointer' , fontSize: '1.26rem'}} onClick={() => {
            navigate('/')
            setSelectedIndex(null)
            }}>
            <FlexBox columnGap={1.5}>
             <SportsVolleyballIcon />
            Shoppy
            </FlexBox>
          </Typography>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ display: { lg: "none" } }}
          >
            <HighlightOffIcon />
          </IconButton>
        </DrawerHeader>
        {sidebarLinks.map((item) => (
          <List
            disablePadding
            subheader={
              <ListSubheader
                sx={{
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  fontSize: "0.99rem",
                  backgroundColor: "inherit",
                  position: 'static'
                }}
              >
                {item.title}
              </ListSubheader>
            }
            key={item.title}
          >
            {item.links.map((subItem) => 
             (
              <ListItem
                key={subItem.link}
                sx={{
                  paddingY: "4px",
                }}
              >
                <ListItemButton
                 disableRipple
                  onClick={(e) => handleLinkClick(e, subItem.idx, subItem.link)}
                  selected={selectedIndex === subItem.idx}
                  sx={{
                    borderRadius: "8px",
                    "&:not(.Mui-selected):hover": {
                      backgroundColor: theme.palette.secondary.dark,
                      ".MuiListItemIcon-root , .MuiListItemText-root": {
                        color: theme.palette.mode === "light" ? "#334155" : "#33373E",
                      },
                    },
                    "&.Mui-selected, &.Mui-selected:hover": {
                      backgroundColor: themeColor,
                      ".MuiListItemIcon-root , .MuiListItemText-root": {
                        color: "#fff",
                      },
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: theme.palette.secondary.contrastText,
                    }}
                  >
                    <subItem.icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={subItem.link}
                    sx={{
                      textTransform: "capitalize",
                      color: theme.palette.secondary.contrastText,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </Drawer>
    );
  })

export default Sidebar;
