import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { Column, Id, Task } from "../types/types";
import { FlexBox } from "../styles/themeStyles";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import TaskCard from "./TaskCard";
import { memo, useCallback, useState } from "react";
import EventDialog from "./EventDialog";
type Props = {
  column: Column;
  tasks: Task[];
  addTask: (columnId: Id, content: string) => void;
  handleDelete?: (id: Id) => void;
  handleShift?: (status: Id, taskId: Id) => void;
};
const ColumnCard = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  padding: "10px",
  borderRadius: "5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    flex: 1,
  },
  display: "flex",
  flexDirection: "column",
  rowGap: "25px",
  minHeight: "500px",
}));
const CssTextField = styled(TextField)({
  "& label": {
    fontSize: "0.9rem",
    color: "rgba(0, 0, 0, 0.6)",
  },
  "& label.Mui-focused": {
    color: "#e57373",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-root": {
    fontSize: "0.95rem",
    color: "#000",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e57373",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#e57373",
    },
  },
});
const ColumnComponent = memo(({ column, tasks, addTask, handleShift, handleDelete}: Props) => {
  const [isOpenned, setIsOpenned] = useState(false);
  const [taskContent, setTaskContent] = useState("");
  const { setNodeRef } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });
  const handleClose = () => {
    setIsOpenned(false);
    setTaskContent("")
  };
  const addNewTask = useCallback((id: Id, content: string) => {
    if (taskContent) {
      addTask(id, content);
    }
    setTaskContent("")
    setIsOpenned(false);
  },[addTask, taskContent])
  return (
    <ColumnCard ref={setNodeRef}>
      <FlexBox sx={{ justifyContent: "space-between" }}>
        <FlexBox sx={{ columnGap: "3px" }}>
          <Typography
            variant="body2"
            sx={{ color: "#000", fontWeight: 500, fontSize: "0.96rem" }}
          >
            {column.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "0.8rem", color: "#757575" }}
          >
            - {tasks.length} items
          </Typography>
        </FlexBox>
        <Tooltip arrow title="Add Task">
          <IconButton
            sx={{ cursor: "pointer", color: "#000" }}
            onClick={() => setIsOpenned(true)}
          >
            <AddCircleOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </FlexBox>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <SortableContext items={tasks.map((task) => task.id)}>
          {tasks.length === 0 ? (
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "0.85rem", color: "#000", fontWeight: 500 }}
            >
              No cards to display
            </Typography>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} handleShift={handleShift} handleDelete={handleDelete}/>)
          )}
        </SortableContext>
      </Box>
      <EventDialog
        isOpened={isOpenned}
        handleClose={handleClose}
        dialogTitle="Add Task"
        width="xs"
      >
        <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "7px",
          }}
        >
         
            <CssTextField
              variant="outlined"
              label="Title"
              size="small"
              value={taskContent}
              onChange={(e) => setTaskContent(e.target.value)}
            />
           
          </Box>
       </DialogContent>
       <DialogActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
       <Box sx={{marginLeft: 'auto'}}>
        <Button sx={{color: '#e57373', fontWeight: 600}} onClick={() => addNewTask(column.id, taskContent)}>Add</Button>
        <Button sx={{color: 'rgba(0, 0, 0, .87)', fontWeight: 600}} onClick={handleClose}>Cancel</Button>
       </Box>
       </DialogActions>
      </EventDialog>
    </ColumnCard>
  );
});

export default ColumnComponent;
