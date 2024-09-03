import {Box, PaletteMode, TextField, Typography, styled} from "@mui/material";
import { grey } from '@mui/material/colors';
export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light' ? {
        primary: {
          main: '#FAFBFB',
          contrastText: '#000'
        },
        secondary: {
          main: '#FFF',
          dark: '#f5f5f5',
          light: grey[600],
          contrastText: '#334155'
        }
      } : {
        primary: {
          main:'#20232A',
          contrastText: '#fff'
        },
        secondary: {
          main: '#33373E',
          dark: '#fafafa',
          light: grey[400],
          contrastText: '#e5e7eb'
        }
        
      })
    }
  })

export const HeadingOne =  styled(Typography)(({theme}) => ({
    ...theme.typography.h1,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
        fontSize: '23px'
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '28px'
    },
}))
  export const BodyTwo = styled(Typography)(({theme}) => ({
    ...theme.typography.body2,
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.down('sm')] : {
      fontSize: '18px'
    },
    [theme.breakpoints.up('sm')] : {
      fontSize: '20px'
    },
  }))

  export const SubtitleOne = styled(Typography)(({theme}) => ({
    ...theme.typography.subtitle1,
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.up('sm')] : {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('sm')] : {
      fontSize: '0.9rem'
    },
    color: theme.palette.primary.contrastText
  }))
  export const SubtitleTwo = styled(Typography)(({theme}) => ({
    ...theme.typography.subtitle2,
    color: theme.palette.secondary.light,
      fontSize: '0.86rem'
  }))
  export const PageBox = styled(Box)(({theme}) => ({
    backgroundColor: '#fff',
    [theme.breakpoints.only('lg')]: {
      paddingX: '30px'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '20px 7px',
    },
    padding: '40px 0px',
    borderRadius: '18px'
  }))
  export const FlexBox = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
  }))
  export const textFieldStyles = {
    '& .MuiInput-input': {
    color: 'rgba(0, 0, 0, 0.87)'},
    flex: '1 1 auto',
    width: '100%',
    '& label': {
      color: 'rgba(0, 0, 0, 0.6)'
    },
    '& label.Mui-focused': {
      color: '#e57373'
    },
    '& .MuiInput-underline:after': {
      borderColor: '#e57373'
    },
     '& .MuiInputBase-root.MuiInput-root': {
       fontSize: '0.85rem',
       borderBottom: '1px solid rgba(0, 0, 0, .87)',
       '&:hover': {
        borderBottom: '1px solid rgba(0, 0, 0, .42) !important'
       },     
     },
  }
  export const CustomTextField = styled(TextField)({
    ...textFieldStyles
  })