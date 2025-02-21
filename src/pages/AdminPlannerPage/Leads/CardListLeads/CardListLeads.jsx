import CardItemLeads from '../CardItemLeads/CardItemLeads';
import styles from "./CardListLeads.module.css";

export default function CardListLeads({ records, onDragStart }) {
  

  if (records.length === 0) return null;

  return (
    <div className={styles.listContainer}>
      <ul className={styles.cardList}>
        {records.map((record) => (
          <CardItemLeads
            key={record.id}
            record={record}
            onDragStart={onDragStart}
          />
        ))}
      </ul>
    </div>
  );
}
