import CardItemLids from '../CardItemLids/CardItemLids';
import styles from "./CardListLids.module.css";

export default function DayCarsListCrm({ records, onDragStart }) {

  if (records.length === 0) return null;

  return (
    <div className={styles.listContainer}>
      <ul className={styles.cardList}>
        {records.map((record) => (
          <CardItemLids
            key={record.id}
            record={record}
            onDragStart={onDragStart}
          />
        ))}
      </ul>
    </div>
  );
}
