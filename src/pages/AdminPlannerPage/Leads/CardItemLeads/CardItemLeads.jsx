import styles from "./CardItemLeads.module.css";
import { format } from "date-fns";
import ava1 from "../../../../assets/images/avatar_default.png";
import AvatarImg from "../../../../assets/images/crmAdminImg/Frame 854.png";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectVisibilityLeads } from "../../../../redux/visibility/selectors";
import {
  BsCalendarDate,
  BsChatDots,
  BsGeoAltFill,
  BsPersonBoundingBox,
  BsPlusCircleDotted,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import { RiBusWifiFill } from "react-icons/ri";
import { eventOptions } from "../../../../utils/CrmAdminUtils/dataToCrmAdmin";
import MenegerPopover from "../MenegerPopover/MenegerPopover";
import CardSettingsBtn from "../CardSettingsBtn/CardSettingsBtn";
import EventsPopover from "../EventsPopover/EventsPopover";

const staffs = [
  {
    id: 1,
    name: "Катерина Матяш",
    email: "kate@avtoatmosfera.com",
    avatar: ava1,
    isActive: true,
  },
  {
    id: 2,
    name: "Олена Ким",
    email: "kim@avtoatmosfera.com",
    avatar: ava1,
    isActive: true,
  },
  {
    id: 3,
    name: "Катерина Котасонова",
    email: "kate.k@avtoatmosfera.com",
    avatar: ava1,
    isActive: false,
  },
];

export default function CardItemLeads({ record, onDragStart }) {
  const visibility = useSelector(selectVisibilityLeads);
  const [currentEvent, setCurrentEvent] = useState(
    record.event || eventOptions[record.status]?.[0] || ""
  );
  const [assignedManager, setAssignedManager] = useState(null);
  const modalRef = useRef(null);
  const [isModalStaffPlus, setIsModalStaffPlus] = useState(false);
  const [isPopoverSettingsOpen, setIsPopoverSettingsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [draggingElement, setDraggingElement] = useState(null);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const {
    id,
    photo_url: photoUrl,
    status,
    name,
    phone,
    date,
    time,
    city,
    company,
    post,
  } = record;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalStaffPlus(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (status && eventOptions[status]) {
      setCurrentEvent(eventOptions[status][0]);
    }
  }, [status]);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setTimeout(() => {
      e.target.classList.add(styles.dragging);
    }, 0);
  
    onDragStart(e, record.id);
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
    e.target.classList.remove(styles.dragging);
  };

  const avatarPhoto = photoUrl || AvatarImg;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd.MM");
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
    setIsPopoverSettingsOpen(false);
  };

  const closePopover = () => {
    setIsEditModalOpen(false);
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
          <button
            onClick={(event) => {
              event.stopPropagation();
              setIsModalStaffPlus((prev) => !prev);
            }}
          >
            {assignedManager ? (
              <img
                src={assignedManager.avatar || "/default-avatar.png"}
                alt="Manager Avatar"
                className={styles.managerAvatar}
              />
            ) : (
              <BsPlusCircleDotted className={styles.plusIcon} />
            )}
          </button>
        </div>

        {isModalStaffPlus && (
          <MenegerPopover
            onClose={() => setIsModalStaffPlus(false)}
            staffs={staffs}
            onStaffSelect={(staff) => {
              setAssignedManager(staff);
              setIsModalStaffPlus(false);
            }}
            offsetLeft={14}
            id={id}
          />
        )}
        <div className={styles.userInfo}>
          <p className={styles.textName}>{name ? name : "Гість"}</p>
          {visibility.phone && (
            <p className={styles.textTel}>{phone ? phone : "ххх-ххххххх"}</p>
          )}
        </div>
      </div>
      <div className={styles.eventContainer}>
        {status !== "new" && (
          <div className={styles.eventInfo}>
            <p className={styles.date}>
              {date ? formatDate(date) : "Дата не обрана"}
            </p>{" "}
            <p className={styles.event}>{currentEvent}</p>
            <p className={styles.time}>{time ? time : "хх:хх"}</p>
            {isEditModalOpen && (
              <EventsPopover
                status={status}
                currentEvent={currentEvent}
                onChangeEvent={setCurrentEvent}
                onClosePopover={closePopover}
              />
            )}
          </div>
        )}
        {(status === "equipment" || status === "connection") && (
          <div className={styles.master}>
            <BsPersonBoundingBox size={18} />
            <p className={styles.masterName}>Петров Николай</p>
          </div>
        )}
        <div className={styles.companyInfo}>
          <BsReverseLayoutTextSidebarReverse
            size={18}
            color="#00A3FF"
            className={styles.iconBlue}
          />
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
          {
            <button>
              <BsChatDots
                size={20}
                color="#00A3FF"
                className={styles.iconBlue}
              />
            </button>
          }
          <button>
            <BsCalendarDate
              size={20}
              color="#00A3FF"
              className={styles.iconBlue}
            />
          </button>
          {status !== "new" && (
            <CardSettingsBtn
              isOpen={isPopoverSettingsOpen}
              onClose={() => setIsPopoverSettingsOpen(false)}
              onClick={(event) => {
                event.stopPropagation();
                setIsPopoverSettingsOpen((prev) => !prev);
              }}
              onEdit={handleEditClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}
