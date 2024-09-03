import { BodyTwo, FlexBox, SubtitleTwo } from "../styles/themeStyles";
import { memo } from "react";

type Props = {
    children: React.ReactNode,
    count: string,
    percentage: string,
    title: string,
    percentColor: string,
}
const EarningsBox = memo(({children, count, percentage, title, percentColor } : Props) => {
  return (
    <FlexBox sx={{
      padding: {xs: '15px 8px',sm:'20px 12px'},
      columnGap: '18px'}}>
      {children}
      <FlexBox sx={{flexDirection: 'column', alignItems: 'flex-start'}}>
      <FlexBox sx={{columnGap: '15px'}}>
       <BodyTwo sx={{fontSize: {xs: '1rem',sm:'1.15rem'}}}>{count}</BodyTwo>
       <SubtitleTwo sx={{color: percentColor, fontSize: {xs: '0.75rem', sm: '0.875rem'}}}>{percentage}</SubtitleTwo>
      </FlexBox>
      <SubtitleTwo>{title}</SubtitleTwo>
      </FlexBox>
    </FlexBox>
  )
})

export default EarningsBox