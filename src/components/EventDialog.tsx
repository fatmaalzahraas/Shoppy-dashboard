import { Breakpoint, Dialog, DialogTitle, IconButton, styled } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { FlexBox } from "../styles/themeStyles";
import { memo } from "react";
type Props = {
    dialogTitle: string,
    isOpened: boolean,
    handleClose: () => void,
    children: React.ReactNode,
    width: Breakpoint
}
const CustomDialog = styled(Dialog)(() => ({
    '.MuiDialog-paper': {
        backgroundColor: '#fff',
        padding: '5px',
        borderRadius: '0'
    },
    '.MuiDialogTitle-root': {
        color: 'rgba(0, 0, 0, .87)',
        fontWeight: 'normal',
        fontSize: '18px'
    }
}))
const EventDialog = memo(({dialogTitle, isOpened, handleClose, children, width} : Props) => {
  return (
    <CustomDialog open={isOpened} maxWidth={width} fullWidth>
        <FlexBox sx={{justifyContent: 'space-between'}}>
        <DialogTitle id="customized-dialog-title" sx={{ m: 0, p: 2, fontSize: {xs: '17px !important',md: '18px'} }}>{dialogTitle}</DialogTitle>
        <IconButton
            aria-label="close"
            size="small"
            onClick={handleClose}
            sx={{color: 'rgba(0, 0, 0, .87)'}}
        >
            <CloseIcon sx={{fontSize: '1.3rem'}}/>
        </IconButton>
        </FlexBox>
       {children}
    </CustomDialog>
  )
})

export default EventDialog