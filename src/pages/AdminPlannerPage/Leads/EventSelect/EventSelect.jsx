import { useState, useRef, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";
import styles from "./EventSelect.module.css";
import { eventOptions } from "../../../../utils/CrmAdminUtils/dataToCrmAdmin";

const EventSelect = ({ status, onEventChange, currentEvent }) => {
  const [visible, setVisible] = useState(false);
  const popoverRef = useRef(null);

  const statusOptions = eventOptions[status]?.filter(event => event !== currentEvent) || [];
  // Закриття поповеру при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedEvent) => {
    onEventChange(selectedEvent);
    setVisible(false);
  };

  return (
    <div className={styles.eventSelectWrapper} ref={popoverRef}>
      <button className={styles.eventButton} onClick={() => setVisible(!visible)}>
        <HiDotsVertical size={18} color="#D8E1FF" />
      </button>

      {visible && (
        <ul className={styles.popover}>
          {statusOptions.map((option, index) => (
            <li
              key={index}
              className={styles.popoverItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventSelect;
