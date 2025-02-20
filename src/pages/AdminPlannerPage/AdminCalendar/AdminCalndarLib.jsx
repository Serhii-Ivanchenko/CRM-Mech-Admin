import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";

import "@schedule-x/theme-default/dist/index.css";
import { useEffect, useState } from "react";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createEventModalPlugin } from "@schedule-x/event-modal";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import styles from "./AdminCalendarLib.module.css";

function AdminCalendarLib() {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Existing Event",
      start: "2025-02-20 12:00",
      end: "2025-02-20 13:00",
    },
  ]);
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events,
    plugins: [
      eventsService,
      createEventModalPlugin(),
      createDragAndDropPlugin(),
    ],
  });

  useEffect(() => {
    let loadedEvents = eventsService.getAll();
    console.log("Loaded events:", loadedEvents);

    const newEvent = {
      id: "2",
      title: "New Event",
      start: "2025-02-21 09:00",
      end: "2025-02-21 10:00",
    };

    if (!loadedEvents.find((e) => e.id === newEvent.id)) {
      eventsService.add(newEvent);
      setEvents([...loadedEvents, newEvent]);
    }
  }, [eventsService]);

  return (
    <div className={styles.calendar}>
      <ScheduleXCalendar
        calendarApp={calendar}
        className={styles.calendarContent}
      />
    </div>
  );
}

export default AdminCalendarLib;
