import { useRef } from "react";
import css from "./MenegerPopover.module.css";
import useOutsideClick from "../../../../utils/CrmAdminUtils/useOutsideClick";

const MenegerPopover = ({ onClose, staffs, onStaffSelect, offsetLeft = 0 }) => {
  const popoverRef = useRef(null);

  // Використовуємо хук для обробки кліків поза поповер
  useOutsideClick(popoverRef, onClose);

  return (
    <div
      ref={popoverRef}
      className={css.staffModal}
      style={{ left: offsetLeft }}
    >
      {staffs.map((item) => (
        <div
          key={item.id}
          className={css.modalItemStaff}
          onClick={() => {
            onStaffSelect(item);
            onClose();
          }}
        >
          <div className={css.iconWrapper}>
            <img
              className={css.managerAvatar}
              src={item.avatar || "/default-avatar.png"}
              alt={item.name}
            />
            <span
              className={css.notificationBubble}
              style={{
                backgroundColor: item.isActive
                  ? "var(--green)"
                  : "var(--input-text)",
              }}
            ></span>
          </div>
          <div className={css.modalStaffBox}>
            <div className={css.staffName}>{item.name}</div>
            <div className={css.staffEmail}>{item.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenegerPopover;
