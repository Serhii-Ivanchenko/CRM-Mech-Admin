import { useState, useEffect } from "react";
import styles from "./EventsPopover.module.css";
import { eventOptions } from "../../../../utils/CrmAdminUtils/dataToCrmAdmin";

const EventsPopover = ({ status, currentEvent, onChangeEvent, onClosePopover }) => {
  const [eventsList, setEventsList] = useState([]);
  
  useEffect(() => {
    if (status) {
      setEventsList(eventOptions[status] || []);
    }
  }, [status]);

  const handleEventClick = (event) => {
    if (event !== currentEvent) {
      onChangeEvent(event);
      onClosePopover();
    }
  };

  return (
    <div className={styles.popoverContainer}>
      <ul className={styles.eventsList}>
        {eventsList.map((event, index) => (
          <li
            key={index}
            className={`${styles.eventItem} ${currentEvent === event ? styles.selected : ""}`}
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
