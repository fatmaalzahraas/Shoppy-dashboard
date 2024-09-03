import { Button } from "@mui/material";
import { useThemeColor } from "../context/themeColorContext";
import { memo } from "react";
type ButtonComponentProps = {
  children: React.ReactNode;
  width: string;
  handleClick: () => void;
};
const ButtonComponent = memo(
  ({ children, width, handleClick }: ButtonComponentProps) => {
    const { themeColor } = useThemeColor();
    return (
      <Button
        variant="contained"
        disableRipple
        disableElevation
        sx={{
          textTransform: "capitalize",
          backgroundColor: themeColor,
          color: "white",
          paddingY: "8px",
          borderRadius: "7px",
          width: width,
          fontSize: { xs: "0.82rem", sm: "0.97rem" },
          "&:hover": {
            backgroundColor: themeColor,
            boxShadow:
              "0px 10px 25px 0px rgb(113 122 131 / 11%) , 0px 8px 15px 0px rgb(113 122 131 / 11%)",
          },
        }}
        onClick={handleClick}
      >
        {children}
      </Button>
    );
  }
);

export default ButtonComponent;
