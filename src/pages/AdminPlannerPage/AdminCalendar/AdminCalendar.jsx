import { useMemo, useState } from "react";
import { format, startOfWeek, endOfWeek, eachDayOfInterval } from "date-fns";
import { uk } from "date-fns/locale";
import CellCard from "./CellCard/CellCard";
import styles from "./AdminCalendar.module.css";

const mockupData = [
  {
    topic: "Staff Meeting",
    date: "2025-02-11",
    start_time: "10:00",
    end_time: "12:00",
    contributor: "Alex",
    members: ["Mary", "Dory", "Max"],
  },
  {
    topic: "Team building",
    date: "2025-02-13",
    start_time: "10:00",
    end_time: "11:00",
    contributor: "Alex",
    members: ["Mary", "Dory", "Max"],
  },
  {
    topic: "Partners presentation",
    date: "2025-02-13",
    start_time: "14:00",
    end_time: "15:00",
    contributor: "Alex",
    members: ["Mary", "Dory", "Max"],
  },
];

export default function AdminCalendar() {
  const [currentWeek] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const days = useMemo(() => {
    return eachDayOfInterval({
      start: currentWeek,
      end: endOfWeek(currentWeek, { weekStartsOn: 1 }),
    });
  }, [currentWeek]);

  const hours = useMemo(
    () =>
      Array.from(
        { length: 11 },
        (_, i) => `${String(i + 8).padStart(2, "0")}:00`
      ),
    []
  );

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarContent}>
        {/* Заголовки днів */}
        <div className={styles.headerRow}>
          <div className={styles.emptyCell} />
          {days.map((day) => (
            <div key={format(day, "yyyy-MM-dd")} className={styles.dayHeader}>
              <span className={styles.dayName}>
                {format(day, "EEEE", { locale: uk })}
              </span>
              <span className={styles.dayNumber}>{format(day, "d")}</span>
            </div>
          ))}
        </div>

        {/* Часові слоти та події */}
        <div className={styles.contentRow}>
          <div className={styles.timeColumn}>
            {hours.map((hour) => (
              <div key={hour} className={styles.hour}>
                {hour}
              </div>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {days.map((day) => {
              const formattedDate = format(day, "yyyy-MM-dd");

              return hours.map((hour) => {
                const event = mockupData.find(
                  (ev) =>
                    ev.date.trim() === formattedDate &&
                    ev.start_time.trim() === hour
                );

                return (
                  <div key={Math.random() + Date.now()} className={styles.day}>
                    {event && <CellCard event={event} />}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
