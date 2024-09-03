import { Link, useRouteError } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { FlexBox } from "../styles/themeStyles";
import { Box, Typography } from "@mui/material";
export default function ErrorPage() {
  const error: unknown = useRouteError();

  return (
    <FlexBox id="error-page" justifyContent="center" height="90vh">
      <Box
        sx={{
          backgroundColor: "#34383C",
          padding: { xs: "15px 20px", sm: "20px 30px" },
          borderRadius: "10px",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <Typography variant="h3" fontSize={{ xs: 25, sm: 35 }} fontWeight={700}>
          Oops!
        </Typography>
        <Typography variant="body1" fontSize={{ xs: 14, sm: 16 }}>
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography
          variant="body1"
          fontStyle="italic"
          fontSize={{ xs: 14, sm: 16 }}
        >
          {(error as Error).message ||
            (error as { statusText?: string }).statusText}
        </Typography>
        <Link to={"/"} replace style={{ textDecoration: "none" }}>
          <FlexBox>
            <KeyboardDoubleArrowLeftIcon sx={{ color: "#9ccc65" }} />
            <Typography
              variant="h6"
              sx={{
                color: "#9ccc65",
                fontSize: { xs: "13px", sm: "15px" },
                fontWeight: 600,
              }}
            >
              Back to our site
            </Typography>
          </FlexBox>
        </Link>
      </Box>
    </FlexBox>
  );
}
