import styles from "./CardItemLeads.module.css";
import { format } from "date-fns";
import AvatarImg from "../../../../assets/images/crmAdminImg/Frame 854.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectVisibilityLeads } from "../../../../redux/visibility/selectors";
import {
  BsCalendarDate,
  BsChatDots,
  BsGeoAltFill,
  BsPersonBoundingBox,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { RiBusWifiFill } from "react-icons/ri";

export default function CardItemLeads({ record, onDragStart }) {
  const visibility = useSelector(selectVisibilityLeads);

  const [isDragging, setIsDragging] = useState(false);
  const [draggingElement, setDraggingElement] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const {
    // id,
    photo_url: photoUrl,
    status,
    name,
    phone,
    date,
    time,
    city,
    company,
    event,
    post,
  } = record;

  const handleDragStart = (e) => {
    setIsDragging(true);
    onDragStart(e, record.id);

    // Відключаємо стандартне перетягування
    const img = new Image();
    img.src = "";
    e.dataTransfer.setDragImage(img, 0, 0);
  };

  const handleDrag = (e) => {
    if (draggingElement) {
      const currentX = e.clientX;
      const currentY = e.clientY;
      const rotationAngle = currentX > initialX ? 10 : -10;

      // Обновляємо позицію дубліката, додаючи зміщення
      draggingElement.style.top = `${currentY - initialY}px`;
      draggingElement.style.left = `${currentX - initialX}px`;
      draggingElement.style.transform = `rotate(${rotationAngle}deg)`;
    }
  };
  const handleDragEnd = (e) => {
    setIsDragging(false);

    // Відновлюємо початковий стан оригінального елемента
    e.target.style.transform = "";

    // Видаляємо дублікат
    if (draggingElement) {
      document.body.removeChild(draggingElement);
      setDraggingElement(null);
    }
  };

  const avatarPhoto = photoUrl || AvatarImg;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd.MM");
  };

  return (
    <div
      className={`${styles.recordContainer} ${
        isDragging ? styles.dragging : ""
      }`}
      id={record.id}
      draggable={status !== "complete"}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
    >
      <div className={styles.userContainer}>
        <div className={styles.userPhoto}>
          <img
            src={avatarPhoto}
            alt="Client's Photo"
            className={styles.clientImg}
          />
        </div>
        <div className={styles.userInfo}>
          <p className={styles.textName}>{name ? name : "Гість"}</p>
          {visibility.phone && (
            <p className={styles.textTel}>
              {phone ? phone : "ххх-ххххххх"}
            </p>
          )}
        </div>
      </div>
      <div className={styles.eventContainer}>
        {status !== "new" && (
          <div className={styles.eventInfo}>
            <p className={styles.date}>
              {date ? formatDate(date) : "Дата не обрана"}
            </p>{" "}
            <p className={styles.event}>{event}</p>
            <p className={styles.time}>{time ? time : "хх:хх"}</p>
          </div>
        )}
        {(status === "equipment" || status === "connection") && (
          <div className={styles.master}>
            <BsPersonBoundingBox size={18} />
            <p className={styles.masterName}>Петров Николай</p>
          </div>
        )}
        <div className={styles.companyInfo}>
          <BsReverseLayoutTextSidebarReverse size={18} color="#00A3FF" className={styles.iconBlue}/>
          <p className={styles.companyName}>{company}</p>
        </div>
      </div>
      <div className={styles.settingsContainer}>
        <div className={styles.firstContainer}>
          <RiBusWifiFill size={20} />
          <p className={styles.postCount}>{post}</p>
        </div>
        <div className={styles.locationsContainer}>
          <BsGeoAltFill size={18} />
          <p className={styles.city}>{city ? city : "Дані Відсутні"}</p>
        </div>
        <div className={styles.btnContainer}>
          {<button>
            <BsChatDots size={20} color="#00A3FF" className={styles.iconBlue}/>
          </button>}
          <button>
            <BsCalendarDate size={20} color="#00A3FF" className={styles.iconBlue} />
          </button>
          {status !== "new" && (<button>
            <HiDotsVertical size={18} color="#D8E1FF" />
          </button>)}
        </div>
      </div>
    </div>
  );
}
