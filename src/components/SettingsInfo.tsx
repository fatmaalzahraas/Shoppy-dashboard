import {
  Box,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  styled,
} from "@mui/material";
import Dialog from "./Dialog";
import { useDarkMode } from "../context/darkModeContext";
import { themeColors } from "../data/data";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useThemeColor } from "../context/themeColorContext";
import { SettingsInfoProps } from "../types/types";
import { memo } from "react";
import { BodyTwo } from "../styles/themeStyles";

const ColorIcon = styled("span")(({ theme, color }) => ({
  borderRadius: "50%",
  [theme.breakpoints.only("xs")]: {
    width: "30px",
    height: "30px",
  },
  width: "40px",
  height: "40px",
  backgroundColor: color,
}));
const SettingsInfo = memo(({ open, handleClose }: SettingsInfoProps) => {
  const { mode, setMode } = useDarkMode();
  const { themeColor, setThemeColor } = useThemeColor();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as "light" | "dark");
    localStorage.setItem("currentMode", event.target.value);
  };
  const handleThemeColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThemeColor(event.target.value);
    localStorage.setItem("themeColor", event.target.value);
  };
  return (
    <Dialog title="Settings" open={open} handleClose={handleClose}>
      <Box sx={{ pb: "14px" }}>
        <BodyTwo sx={{ mb: "10px" }}>theme option</BodyTwo>
        <FormControl>
          <RadioGroup
            name="controlled-radio-buttons-group"
            value={mode}
            onChange={handleChange}
          >
            <FormControlLabel
              value="light"
              control={
                <Radio
                  size="small"
                  sx={{ "&.Mui-checked": { color: "#03a9f4" } }}
                />
              }
              label="Light"
            />
            <FormControlLabel
              value="dark"
              control={
                <Radio
                  size="small"
                  sx={{ "&.Mui-checked": { color: "#03a9f4" } }}
                />
              }
              label="Dark"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box sx={{ py: "15px" }}>
        <BodyTwo sx={{ mb: "10px" }}>theme colors</BodyTwo>
        <RadioGroup
          name="theme-color"
          value={themeColor}
          onChange={handleThemeColorChange}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {themeColors.map((color, index) => (
              <Radio
                key={index}
                value={color}
                disableRipple
                icon={<ColorIcon color={color} />}
                checkedIcon={
                  <Box
                    sx={{
                      borderRadius: "50%",
                      width: { xs: "30px", sm: "40px" },
                      height: { xs: "30px", sm: "40px" },
                      backgroundColor: color,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <DoneOutlinedIcon fontSize="small" />
                  </Box>
                }
              />
            ))}
          </Box>
        </RadioGroup>
      </Box>
    </Dialog>
  );
});

export default SettingsInfo;
