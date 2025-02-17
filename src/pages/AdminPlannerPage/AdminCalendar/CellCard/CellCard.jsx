import styles from "./CellCard.module.css";

function CellCard({ event }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.eventName}>{event.topic}</p>
      <p className={styles.period}>{`${event.start} - ${event.end}`}</p>

      <div className={styles.avatarContainer}>
        {event.members.map((member, index) => (
          <img
            key={index}
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${member}`}
            alt={member}
            className={styles.avatar}
          />
        ))}
      </div>
    </div>
  );
}

export default CellCard;

//   const data = [
// {
// 	Id: 1,
// 	Subject: "Meeting",
// 	StartTime: new Date(2023, 1, 15, 10, 0),
// 	EndTime: new Date(2023, 1, 15, 12, 30),
// 	Client: "John Doe",
//   },
// ];
