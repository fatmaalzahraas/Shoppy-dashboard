import { Box } from "@mui/material"
import { memo } from "react"

type Props = {
    children: React.ReactNode,
    color: string,
    bgColor: string,
    width: string,
    height: string,
    borderRadius: string,
    shadow: boolean,
}
const IconComponent = memo(({children, color, bgColor, width, height, borderRadius, shadow} : Props) => {
   
  return (
    <Box sx={{
        color: color,
        bgcolor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        borderRadius: borderRadius,
        cursor: 'pointer',
        '&:hover': {
            boxShadow: shadow ? '0px 10px 25px 0px rgb(113 122 131 / 11%) , 0px 8px 15px 0px rgb(113 122 131 / 11%)': 'none',
        }
    }}>{children}</Box>
  )
})

export default IconComponent
