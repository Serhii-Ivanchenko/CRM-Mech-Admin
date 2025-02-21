import { HiDotsVertical } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import styles from "./CardSettingsBtn.module.css";
import { useRef, useEffect } from "react";

function CardSettingsBtn({ isOpen, onClick, onClose, onEdit }) {
  const popoverSettingsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverSettingsRef.current && !popoverSettingsRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleEditEvent = () => {
    onEdit();
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        <HiDotsVertical size={18} color="#D8E1FF" />
      </button>

      {isOpen && (
        <div className={styles.popover} ref={popoverSettingsRef}>
          <ul className={styles.listBtn}>
            <li className={styles.option}>
              <button className={styles.editBtn} onClick={handleEditEvent}>
                <BsPencil size={14} />
                Редагувати подію
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CardSettingsBtn;
