import { Box} from "@mui/material";
import { HeadingOne, SubtitleTwo } from "../styles/themeStyles";
import { memo } from "react";

type HeaderProps = {
    title: string;
    category: string;
}
const Header = memo(({title, category} : HeaderProps) => {
  return (
    <Box mb={4.5} sx={{paddingLeft: '1.5rem'}}>
        <SubtitleTwo sx={{fontSize: '1.15rem'}}>{category}</SubtitleTwo>
        <HeadingOne sx={{fontWeight: 700, fontSize: {xs: '1.5rem',sm: '1.95rem'}, color: '#000'}}>{title}</HeadingOne>
    </Box>
  )
})

export default Header