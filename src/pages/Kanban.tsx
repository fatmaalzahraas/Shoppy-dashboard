import { Box } from "@mui/material"
import Header from "../components/Header"
import Helmet from "../components/Helmet"
import KanbanBoard from "../components/KanbanBoard"
import { PageBox } from "../styles/themeStyles"

const Kanban = () => {
  return (
    <Helmet title="Kanban">
      <PageBox>
        <Header title="Kanban" category="APP" />
        <Box sx={{paddingX: {xs: '0.8rem',md:'2.2rem'}}}>
          <KanbanBoard />
        </Box>
      </PageBox>
    </Helmet>
  )
}

export default Kanban