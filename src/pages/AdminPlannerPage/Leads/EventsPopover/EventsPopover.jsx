import { useState, useEffect } from "react";
import styles from "./EventsPopover.module.css";
import { eventOptions } from "../../../../utils/CrmAdminUtils/dataToCrmAdmin";

const EventsPopover = ({ status, currentEvent, onChangeEvent, onClosePopover }) => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    if (status) {
      // Фільтруємо список, щоб прибрати поточну подію
      const filteredEvents = eventOptions[status]?.filter(event => event !== currentEvent) || [];
      setEventsList(filteredEvents);
    }
  }, [status, currentEvent]);

  const handleEventClick = (event) => {
    onChangeEvent(event);
    onClosePopover();
  };

  return (
    <div className={styles.popoverContainer}>
      <ul className={styles.eventsList}>
        {eventsList.map((event, index) => (
          <li
            key={index}
            className={styles.eventItem}
            onClick={() => handleEventClick(event)}
          >
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPopover;
