import {
  styled,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  useMediaQuery,
  useTheme,
  Box,
  Divider,
} from "@mui/material";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import { SettingsInfoProps } from "../types/types";
import { memo } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type DialogBoxProps = {
  children: React.ReactNode;
  title: string;
} & SettingsInfoProps;
const DialogBox = memo(
  ({ children, title, open, handleClose }: DialogBoxProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <BootstrapDialog
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          "& .MuiDialog-container": {
            justifyContent: "flex-end",
            alignItems: "flex-start",
          },
          "& .MuiDialog-paper": {
            margin: "0",
            borderRadius: "0",
            padding: "10px 20px",
            height: "100vh",
            maxHeight: "100vh",
            width: { sm: "430px" },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "10px",
          }}
        >
          <DialogTitle
            sx={{
              m: 0,
              p: 2,
              fontWeight: 600,
              fontSize: "20px",
              color: theme.palette.primary.contrastText,
            }}
            id="customized-dialog-title"
          >
            {title}
          </DialogTitle>
          <IconButton
            aria-label="close"
            disableRipple
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 15,
              color: (theme) => theme.palette.grey[500],
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            <DisabledByDefaultOutlinedIcon />
          </IconButton>
        </Box>
        <Divider />
        <DialogContent sx={{ paddingY: 0 }}>{children}</DialogContent>
      </BootstrapDialog>
    );
  }
);

export default DialogBox;
