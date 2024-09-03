import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  useTheme,
} from "@mui/material";
import { transactionsDates } from "../data/data";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    backgroundColor: "transparent",
    border: "1px solid #e0e0e0",
    fontSize: "0.85rem",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
    fontWeight: 500,
    borderRadius: "4px",
    padding: "10px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "7px",
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: "0px",
    left: "10px",
    width: "83%",
    height: "3px",
    backgroundColor: "#e57373",
    transition: theme.transitions.create(["transform"]),
    transform: "scaleX(0)",
  },
  "&.focusedIn::before": {
    transform: "scaleX(1)",
  },
}));

const SelectMenu = () => {
  const [transactions, setTransactions] = useState("March");
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setTransactions(event.target.value);
  };
  const theme = useTheme();
  return (
    <FormControl sx={{ width: 120 }} size="small">
      <Select
        value={transactions}
        onChange={handleChange}
        inputProps={{ "aria-label": "Without label" }}
        onClose={() => setIsFocused(false)}
        onOpen={() => setIsFocused(true)}
        input={<BootstrapInput className={isFocused ? "focusedIn" : ""} />}
        MenuProps={{
          slotProps: {
            paper: { style: { backgroundColor: theme.palette.secondary.main } },
          },
        }}
      >
        {transactionsDates.map((el, index) => (
          <MenuItem
            key={`el-${index}`}
            disableRipple
            value={el.month}
            sx={{
              fontSize: "0.85rem",
              color: transactions === el.month ? "#e57373" : "",
            }}
          >
            {el.month} {el.year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
