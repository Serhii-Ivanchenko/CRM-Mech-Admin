import { useMemo, useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
  addDays,
  // addHours,
} from "date-fns";
import { uk } from "date-fns/locale";

import styles from "./AdminCalendar.module.css";

export default function AdminCalendar() {
  const [currentWeek] = useState(() =>
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  // Додаємо стан для подій
  const [events] = useState([
    {
      id: 1,
      title: "Зустріч",
      start: addDays(currentWeek, 3),
      duration: 2,
    },
  ]);

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

          {/* Контейнер для подій */}
          {days.map((day) => (
            <div key={format(day, "yyyy-MM-dd")} className={styles.dayColumn}>
              {events
                .filter((event) => isSameDay(event.start, day))
                .map((event) => (
                  <div
                    key={event.id}
                    className={styles.event}
                    style={{
                      top: `${(format(event.start, "H") - 8) * 50}px`, // 50px на годину
                      height: `${event.duration * 50}px`,
                    }}
                  >
                    {console.log("event.title:", event.title)}
                    {console.log("event.start:", event.start)}
                    {console.log("event calendar day:", day)}

                    {console.log("currentWeek:", currentWeek)}
                    {console.log(
                      "currentWeek.toDateString():",
                      currentWeek.toDateString()
                    )}
                    {console.log(
                      "days:",
                      days.map((day) => day.toDateString())
                    )}
                    {console.log(
                      "event.start after fix:",
                      events[0].start.toDateString()
                    )}
                    {console.log(
                      "event.start timezone offset:",
                      event.start.getTimezoneOffset()
                    )}
                    {console.log(
                      "event.start UTC:",
                      new Date(event.start).toISOString()
                    )}
                    {console.log("day UTC:", new Date(day).toISOString())}
                    {event.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
