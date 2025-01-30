import css from "./Leads.module.css";
import DayCarsListCrm from "./CardListLids/CardListLids.jsx";
import Column from "../../../components/Column/Column";
import { useState } from "react";
import { cardsLids, statusLidsMapping } from "../../../utils/CrmAdminUtils/dataToCrmAdmin";
import clsx from "clsx";

// Масив кольорів для рамки
const svgData = [
  { fill: "var(--status-new)" },
  { fill: "var(--status-diag)" },
  { fill: "var(--status-repair)" },
  { fill: "var(--glow-all-calls)" },
  { fill: "var(--status-complete)" },
];

export default function Leads() {
  const [cards, setCards] = useState(cardsLids);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
    console.log("Drag start with ID:", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    const itemId = Number(e.dataTransfer.getData("text/plain"));
    
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === itemId ? { ...card, status } : card
      )
    );
  };
  const getItemsForStatus = (status) => {
    return cards.filter((item) => item.status === status);
  };

  return (
    <div className={css.container}>
      <div className={css.headersContainer}>
      {Object.entries(statusLidsMapping).map(([status, label], index) => {
  const filteredRecords = getItemsForStatus(status);
  const recordCount = filteredRecords.length;
  const borderColor = svgData[index] ? svgData[index].fill : "transparent";

  return (
    <div
      key={status}
      className={css.headerColumn}
      style={{ borderLeft: `2px solid ${borderColor}` }}
    >
      <h3
        className={clsx(css.statusHeader, {
          [css.firstStatus]: index === 0,
        })}
      >
        {label}
        <span className={css.carCount}>{recordCount}</span>
      </h3>
    </div>
  );
})}
      </div>

      <div className={css.columnsContainer}>
        <div className={css.columnsInnerContainer}>
          {Object.entries(statusLidsMapping).map(([status, label]) => {
            const filteredRecords = getItemsForStatus(status);
            return (
              <Column
                key={status}
                id={status}
                title={label}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, status)}
              >
                <DayCarsListCrm
                  records={filteredRecords}
                  onDragStart={handleDragStart}
                />
              </Column>
            );
          })}
        </div>
      </div>
    </div>
  );
}
