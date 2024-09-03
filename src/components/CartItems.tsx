import { Box, Divider, Typography, useTheme } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { SettingsInfoProps } from "../types/types";
import Dialog from "./Dialog";
import { cartItems } from "../data/data";
import { useThemeColor } from "../context/themeColorContext";
import { memo } from "react";
import ButtonComponent from "./Button";
import { BodyTwo, SubtitleOne, SubtitleTwo } from "../styles//themeStyles";
const amountStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const CartItems = memo(({ open, handleClose }: SettingsInfoProps) => {
  const theme = useTheme();
  const { themeColor } = useThemeColor();
  return (
    <Dialog title="Shopping Cart" open={open} handleClose={handleClose}>
      <Box>
        {cartItems.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "20px",
                py: "22px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="cart-items-images"
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}
              >
                <BodyTwo sx={{ fontSize: "17px !important" }}>
                  {item.title}
                </BodyTwo>
                <SubtitleOne
                  sx={{ color: theme.palette.secondary.contrastText }}
                >
                  {item.category}
                </SubtitleOne>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                  }}
                >
                  <SubtitleOne
                    sx={{
                      fontSize: "17px",
                    }}
                  >
                    ${item.price}
                  </SubtitleOne>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: `1px solid ${
                        theme.palette.mode === "light"
                          ? "rgba(0, 0, 0, 0.1)"
                          : "rgba(255, 255, 255, 0.12)"
                      }`,
                      borderRadius: "5px",
                      columnGap: "10px",
                      padding: "10px",
                    }}
                  >
                    <SubtitleTwo sx={{ ...amountStyles, cursor: "pointer" }}>
                      <AddOutlinedIcon fontSize="small" color="success" />
                    </SubtitleTwo>
                    <SubtitleTwo
                      sx={{
                        ...amountStyles,
                        border: `1px solid ${
                          theme.palette.mode === "light"
                            ? "rgba(0, 0, 0, 0.12)"
                            : "rgba(255, 255, 255, 0.12)"
                        }`,
                        borderTop: "0",
                        borderBottom: "0",
                        paddingX: "12px",
                        color: themeColor,
                      }}
                    >
                      0
                    </SubtitleTwo>
                    <SubtitleTwo sx={{ ...amountStyles, cursor: "pointer" }}>
                      <RemoveOutlinedIcon fontSize="small" color="success" />
                    </SubtitleTwo>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider />
          </Box>
        ))}
        <Box sx={{ paddingTop: "15px", paddingBottom: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "10px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.secondary.contrastText,
                fontSize: "17px",
              }}
            >
              Sub Total
            </Typography>
            <BodyTwo sx={{ fontSize: "17px !important" }}>$700</BodyTwo>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "18px",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.secondary.contrastText,
                fontSize: "17px",
              }}
            >
              Total
            </Typography>
            <BodyTwo sx={{ fontSize: "17px !important" }}>$700</BodyTwo>
          </Box>
          <ButtonComponent width="100%" handleClick={handleClose}>
            Place Order
          </ButtonComponent>
        </Box>
      </Box>
    </Dialog>
  );
});

export default CartItems;
