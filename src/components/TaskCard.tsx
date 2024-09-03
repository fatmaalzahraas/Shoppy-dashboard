import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Theme,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Id, Task } from "../types/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { memo, useState } from "react";
import EventDialog from "./EventDialog";
import { statusList } from "../data/data";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { FlexBox } from "../styles/themeStyles";
type Props = {
  task: Task;
  handleDelete?: (id: Id) => void;
  handleShift?: (status: Id, taskId: Id) => void;
};
const CardStyle = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "6px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "6px 13px",
  cursor: "grab",
}));
const TaskCard = memo(({ task, handleShift, handleDelete }: Props) => {
  const [open, setOpen] = useState(false);
  const [taskInfo, setTaskInfo] = useState<Id>("");
  const [statusType, setStatusType] = useState<Id>("");
  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const handleClick = (myTask: Task) => {
    setOpen(true);
    setTaskInfo(myTask.id);
    setStatusType(myTask.columnId);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTaskShift = () => {
    handleShift && handleShift(statusType, taskInfo);
    setOpen(false);
  };
  if (isDragging) {
    return (
      <CardStyle
        ref={setNodeRef}
        style={style}
        sx={{
          border: "1px dashed #bdbdbd",
          backgroundColor: "#f5f5f5",
          paddingY: "38px",
        }}
      ></CardStyle>
    );
  }
  return (
    <>
      <CardStyle
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        onClick={smallScreen ? () => handleClick(task) : undefined}
      >
        <FlexBox sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#000", fontSize: "0.87rem", fontWeight: 500 }}
          >
            {task.id}
          </Typography>
          <DeleteOutlinedIcon
            sx={{
              fontSize: "17px",
              cursor: "pointer",
              color: "rgba(0, 0, 0, 0.7)",
            }}
            onClick={() => handleDelete && handleDelete(task.id)}
          />
        </FlexBox>
        <Typography
          variant="subtitle2"
          sx={{ color: "#616161", fontSize: "0.8rem" }}
        >
          {task.content}
        </Typography>
      </CardStyle>
      <EventDialog
        dialogTitle="Shift Task"
        isOpened={open}
        handleClose={handleClose}
        width="xs"
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: "10px",
              pl: "10px",
            }}
          >
            <FlexBox columnGap={0.5}>
              <AssignmentTurnedInOutlinedIcon
                sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "18px" }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                {taskInfo}
              </Typography>
            </FlexBox>
            <FormControl>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: { xs: "8px", sm: "13px" },
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "0.92rem",
                    color: "rgba(0, 0, 0, 0.87)",
                    fontWeight: 500,
                  }}
                >
                  Status:
                </Typography>
                <RadioGroup
                  row
                  value={statusType}
                  onChange={(e) => setStatusType(e.target.value)}
                >
                  {statusList.map((el) => (
                    <FormControlLabel
                      key={el.columnId}
                      value={el.columnId}
                      label={el.title}
                      control={
                        <Radio
                          sx={{
                            color: "rgba(0, 0, 0, 0.87)",
                            "& .MuiSvgIcon-root": { fontSize: 13 },
                            "&.Mui-checked": {
                              color: "#e57373",
                            },
                          }}
                        />
                      }
                      sx={{
                        ".MuiFormControlLabel-label": {
                          fontSize: "0.87rem",
                          color: "rgba(0, 0, 0, 0.87)",
                        },
                      }}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#e57373", fontWeight: 600 }}
            onClick={handleTaskShift}
          >
            Shift
          </Button>
          <Button
            sx={{ color: "rgba(0, 0, 0, .87)", fontWeight: 600 }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </EventDialog>
    </>
  );
});

export default TaskCard;
