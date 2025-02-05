import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { fetchGoogleCalendarEvents } from "../../../redux/auth/operations";

export default function AdminCalendar() {
  const [events, setEvents] = useState([]);
  const dispatch = useDispatch();
  const {
    events: calendarEvents,
    loading,
    error,
  } = useSelector((state) => state.auth); // Correctly accessing events in 'auth' slice

  useEffect(() => {
    const token = localStorage.getItem("X-Api-Key"); // Assuming the token is stored in localStorage
    if (token) {
      dispatch(fetchGoogleCalendarEvents(token)); // Dispatching the action
    }
  }, [dispatch]);

  useEffect(() => {
    if (calendarEvents) {
      // Format the events after they are fetched
      const formattedEvents = calendarEvents.map((event) => ({
        Id: event.id,
        Subject: event.summary,
        StartTime: new Date(event.start.dateTime),
        EndTime: new Date(event.end.dateTime),
      }));
      setEvents(formattedEvents); // Set formatted events to local state
    }
  }, [calendarEvents]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ScheduleComponent
        selectedDate={new Date()}
        eventSettings={{ dataSource: events }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
