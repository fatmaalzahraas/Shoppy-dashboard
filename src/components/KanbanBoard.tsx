import { useCallback, useState } from "react";
import { kanbanColumns, tasksData } from "../data/data";
import { Id, Task } from "../types/types";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import ColumnComponent from "./ColumnComponent";
import TaskCard from "./TaskCard";
import { createPortal } from "react-dom";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Box, Theme, useMediaQuery } from "@mui/material";
import { FlexBox } from "../styles/themeStyles";
const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksData);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const smallScreen = useMediaQuery((theme : Theme) => theme.breakpoints.down('md'))
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  );

  const onDragStart = (event: DragStartEvent) =>{
    const { active } = event;
    if (active.data.current?.type === "Task") {
      setActiveTask(active.data.current?.task);
    }
  }

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;
    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";
    if (!isActiveTask) return;
    if (isActiveTask && isOverTask) {
      setTasks((myTasks) => {
        const activeIndex = myTasks.findIndex((task) => task.id === activeId);
        const overIndex = myTasks.findIndex((task) => task.id === overId);
        if (myTasks[activeIndex].columnId !== myTasks[overIndex].columnId) {
          myTasks[activeIndex].columnId = myTasks[overIndex].columnId;
          return arrayMove(myTasks, activeIndex, overIndex - 1);
        }
        return arrayMove(myTasks, activeIndex, overIndex);
      });
    }
    const isOverColumn = over.data.current?.type === "Column";
    if (isActiveTask && isOverColumn) {
      setTasks((myTasks) => {
        const activeIndex = myTasks.findIndex((task) => task.id === activeId);
        myTasks[activeIndex].columnId = overId;
        return arrayMove(myTasks, activeIndex, activeIndex);
      });
    }
  }
  
  const addTask = useCallback((columnId: Id, content: string) => {
    const newTask = {
      id: `Task ${Math.floor(Math.random() * 1000)}`,
      columnId,
      content,
    };
   
      setTasks([...tasks, newTask]);
  }, [tasks]);
  const handleShift = useCallback((status: Id, taskId: Id) => {
    const myTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          columnId: status
        }
      } else return task
    })
    setTasks(myTasks)
  }, [tasks])
  const handleDelete = useCallback((id: Id) => {
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
  }, [tasks])
  if (smallScreen) {
    return (
      <FlexBox
        sx={{
          rowGap: "15px",
          flexDirection: "column",
        }}>
          {kanbanColumns.map((column) => (
            <ColumnComponent
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.columnId === column.id)}
              addTask={addTask}
              handleShift={handleShift}
              handleDelete={handleDelete}
            />
          ))}
        </FlexBox>
    )
  }
  return (
    <DndContext
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      sensors={sensors}
    >
      <Box
        sx={{
          display: "flex",
          columnGap: "10px",
          rowGap: "15px",
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <SortableContext items={kanbanColumns.map((column) => column.id)}>
          {kanbanColumns.map((column) => (
            <ColumnComponent
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.columnId === column.id)}
              addTask={addTask}
              handleDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </Box>
      {createPortal(
        <DragOverlay>
          {activeTask && <TaskCard task={activeTask} />}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};

export default KanbanBoard;
