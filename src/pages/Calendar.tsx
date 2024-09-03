import { Box, Button, DialogActions, DialogContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { CustomTextField, FlexBox, PageBox } from "../styles/themeStyles";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { initialEvents } from "../data/data";
import { useEffect, useRef, useState } from "react";
import EventDialog from "../components/EventDialog";
import {
  DesktopDateTimePicker,
  LocalizationProvider,
  MobileDateTimePicker,
  pickersLayoutClasses,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { textFieldStyles } from "../styles/themeStyles";
import moment, { Moment } from "moment";
import { EventImpl } from "@fullcalendar/core/internal";
const layoutStyles = {
  [`.${pickersLayoutClasses.contentWrapper}`]: {
    ".MuiDateCalendar-root": {
      width: { md: "270px" },
    },
    ".MuiMultiSectionDigitalClock-root": {
      ".MuiMultiSectionDigitalClockSection-item": {
        fontSize: "0.9rem",
      },
    },
    ".MuiDayCalendar-root": {
      ".MuiDayCalendar-header .MuiDayCalendar-weekDayLabel": {
        width: "32px",
        height: "38px",
        fontWeight: "600",
      },
      ".MuiDayCalendar-slideTransition .MuiPickersDay-root": {
        width: "32px",
        height: "32px",
      },
    },
  },
};
const calendarHeaderStyles = {
  paddingLeft: "10px",
  ".MuiPickersCalendarHeader-labelContainer": {
    fontSize: "0.89rem",
    fontWeight: 600,
  },
};
const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState(initialEvents);
  const [dialogTitle, setDialogTitle] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [start, setStart] = useState<Moment | null>(moment(""));
  const [end, setEnd] = useState<Moment | null>(moment(""));
  const [event, setEvent] = useState<EventImpl | null>(null);
  const calendarRef = useRef<FullCalendar>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const closeDialog = () => {
    setIsOpened(false);
    setTitle("");
    setLocation("");
  };
  const handleEvents = () => {
    //console.log("handleEvents");
  };
  const handleDateSelection = (selectionInfo: DateSelectArg) => {
    setDialogTitle("New Event");
    setIsOpened(true);
    setIsEditable(false);
    setStart(moment(selectionInfo.start));
    setEnd(moment(selectionInfo.end));
  };
  const addNewEvent = () => {
    const newEvent = {
      id: String(currentEvents.length + 1),
      title,
      location,
      start: moment(start).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]"),
      end: moment(end).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]"),
    };
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.addEvent(newEvent);
    }
    setCurrentEvents([...currentEvents, newEvent]);
    setIsOpened(false);
    setStart(null);
    setEnd(null);
    setTitle("");
    setLocation("");
    setIsEditable(false);
  };
  const handleEventClick = (eventClickInfo: EventClickArg) => {
    setIsOpened(true);
    setIsEditable(true);
    setDialogTitle("Edit Event");
    setStart(moment(eventClickInfo.event.start));
    setEnd(moment(eventClickInfo.event.end));
    setTitle(eventClickInfo.event.title);
    setLocation(eventClickInfo.event.extendedProps?.location);
    setEvent(eventClickInfo.event);
  };
  const editEvent = (myEvent: EventImpl | null) => {
    const newEvents = currentEvents.map((ev) => {
      if (ev.id === myEvent?.id) {
        return {
          ...ev,
          title,
          location,
          start: moment(start).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]"),
          end: moment(end).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]"),
        };
      } else {
        return ev;
      }
    });
    setCurrentEvents(newEvents);
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      if (event) {
        const eventInCalendar = calendarApi.getEventById(event.id);
        eventInCalendar?.setProp("title", title);
        eventInCalendar?.setExtendedProp("location", location);
        eventInCalendar?.setStart(
          moment(start).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]")
        );
        eventInCalendar?.setEnd(
          moment(end).utc().format("YYYY-MM-DDTHH:mm:00.000[Z]")
        );
      }
    }
    setStart(null);
    setEnd(null);
    setTitle("");
    setLocation("");
    setIsOpened(false);
    setIsEditable(false);
  };
  const removeEvent = (myEvent: EventImpl | null) => {
    if (!event) return;
    myEvent?.remove();
    const myEvents = currentEvents.filter((ev) => ev.id !== myEvent?.id);
    setCurrentEvents(myEvents);
    setIsEditable(false);
    setIsOpened(false);
    setLocation("");
    setTitle("");
  };
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.updateSize();
    }
  }, []);
  return (
    <Helmet title="Calendar">
      <PageBox>
        <Header title="Calendar" category="APP" />
        <Box sx={{ paddingX: { xs: "0.8rem", md: "2.2rem" } }}>
          <Box>
            <FullCalendar
              ref={calendarRef}
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev next title",
                right: "today,timeGridDay,timeGridWeek,dayGridMonth,agenda",
              }}
              views={{
                agenda: {
                  type: "listWeek",
                  buttonText: "Agenda",
                },
              }}
              allDaySlot={false}
              initialView="timeGridWeek"
              editable={true}
              selectable={true}
              dayMaxEvents={true}
              weekends={true}
              nowIndicator={true}
              selectMirror={true}
              navLinks={true}
              handleWindowResize
              longPressDelay={1}
              initialEvents={currentEvents}
              eventColor="#3f51b5"
              eventTimeFormat={{
                hour: "numeric",
                minute: "2-digit",
                meridiem: "short",
              }}
              eventClassNames={(event) => {
                return event.view.type === "dayGridMonth" ? "month-view" : "";
              }}
              eventContent={(event) => {
                return (
                  <Box sx={{ p: "3px" }}>
                    <Typography
                      variant="subtitle1"
                      fontSize={{ xs: 9, sm: 11.5, md: 12.5 }}
                      fontWeight={600}
                      lineHeight={1.5}
                    >
                      {event.event.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontSize={{ xs: 8, sm: 10, md: 11 }}
                      lineHeight={1.6}
                      textTransform={"uppercase"}
                    >
                      {event.timeText}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontSize={{ xs: 8, sm: 10, md: 11 }}
                      lineHeight={1.6}
                    >
                      {event.event.extendedProps.location}
                    </Typography>
                  </Box>
                );
              }}
              eventsSet={handleEvents}
              select={handleDateSelection}
              eventClick={handleEventClick}
            />
          </Box>
        </Box>
      </PageBox>
      <EventDialog
        isOpened={isOpened}
        handleClose={closeDialog}
        dialogTitle={dialogTitle}
        width="sm"
      >
        <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "7px",
            paddingX: {xs: '10px', sm: '0px'}
          }}
        >
          <FlexBox
            sx={{
              columnGap: "20px",
              rowGap: "7px",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
            }}
          >
            <CustomTextField
              label="Title"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <CustomTextField
              label="Location"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FlexBox>
          <Box>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DemoContainer
                components={["MobileDateTimePicker, DesktopDateTimePicker"]}
                sx={{
                  flexDirection: { sm: "row" },
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "7px",
                  overflow: "hidden",
                  paddingTop: "8px",
                  height: "100%",
                }}
              >
                <Box sx={{ flex: 1, width: '100%' }}>
                  {smallScreen ? (
                    <MobileDateTimePicker
                      label="Start"
                      slotProps={{
                        textField: {
                          InputLabelProps: { shrink: true },
                          variant: "standard",
                          sx: { ...textFieldStyles },
                        },
                      }}
                      value={start}
                      onChange={(newValue) => setStart(newValue)}
                    />
                  ) : (
                    <DesktopDateTimePicker
                      label="Start"
                      slotProps={{
                        textField: {
                          InputLabelProps: { shrink: true },
                          variant: "standard",
                          sx: { ...textFieldStyles },
                        },
                        openPickerButton: {
                          disableRipple: true,
                          sx: {
                            paddingX: "10px",
                            color: 'rgba(0, 0, 0, 0.54)',
                            "&:hover": { backgroundColor: "transparent" },
                          },
                        },
                        layout: {
                          sx: layoutStyles,
                        },
                        calendarHeader: {
                          sx: calendarHeaderStyles,
                        },
                        leftArrowIcon: { fontSize: "small" },
                        rightArrowIcon: { fontSize: "small" },
                        switchViewIcon: { sx: { display: "none" } },
                      }}
                      value={start}
                      onChange={(newValue) => setStart(newValue)}
                    />
                  )}
                </Box>
                <Box sx={{ flex: 1, width: '100%',marginTop: "0px !important" }}>
                  {smallScreen ? (
                    <MobileDateTimePicker
                      label="End"
                      slotProps={{
                        textField: {
                          InputLabelProps: { shrink: true },
                          variant: "standard",
                          sx: { ...textFieldStyles },
                        },
                      }}
                      value={end}
                      onChange={(newValue) => setEnd(newValue)}
                    />
                  ) : (
                    <DesktopDateTimePicker
                      label="End"
                      slotProps={{
                        textField: {
                          InputLabelProps: { shrink: true },
                          variant: "standard",
                          sx: { ...textFieldStyles },
                        },
                        openPickerButton: {
                          disableRipple: true,
                          sx: {
                            paddingX: "10px",
                            color: 'rgba(0, 0, 0, 0.54)',
                            "&:hover": { backgroundColor: "transparent" },
                          },
                        },
                        layout: {
                          sx: layoutStyles,
                        },
                        calendarHeader: {
                          sx: calendarHeaderStyles,
                        },
                        leftArrowIcon: { fontSize: "small" },
                        rightArrowIcon: { fontSize: "small" },
                        switchViewIcon: { sx: { display: "none" } },
                      }}
                      value={end}
                      onChange={(newValue) => setEnd(newValue)}
                    />
                  )}
                </Box>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
        </DialogContent>
        <DialogActions sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {isEditable && <Button sx={{color: 'rgba(0, 0, 0, .87)', fontWeight: 600}} onClick={() => removeEvent(event)}>Delete</Button>}
            <Box sx={{marginLeft: 'auto'}}>
            {isEditable ? <Button type="submit" sx={{color: '#e57373', fontWeight: 600}} onClick={() => editEvent(event)}>Edit</Button>: <Button type="submit" sx={{color: '#e57373', fontWeight: 600}} onClick={addNewEvent}>Add</Button>}
            <Button sx={{color: 'rgba(0, 0, 0, .87)', fontWeight: 600}} onClick={closeDialog}>Cancel</Button>
            </Box>
        </DialogActions>
      </EventDialog>
    </Helmet>
  );
};

export default Calendar;
