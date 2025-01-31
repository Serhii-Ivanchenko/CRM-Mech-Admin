import css from "./DashboardLeftSide.module.css";
import { BsPersonFill } from "react-icons/bs";

const leftCard = [
  {
    title: "Продажі",
    amountOfMoney: "612 200 $",
    numberOfPeople: "50",
    amountBottom: "128$",
    extraData: [
      {
        icon: "",
        text: "Vanilla",
        price: "1K $",
      },
      {
        icon: "",
        text: "Standard",
        price: "2K $",
      },
      {
        icon: "",
        text: "PRO",
        price: "3K $",
      },
    ],
  },
  {
    title: "Витрати",
    amountOfMoney: "612 200 $",
    numberOfPeople: "",
    amountBottom: "62$",
  },
  {
    title: "Прибуток",
    amountOfMoney: "612 200 $",
    numberOfPeople: "",
    amountBottom: "66$",
  },
  {
    title: "Ліди",
    amountOfMoney: "5 200 $",
    numberOfPeople: "120",
    amountBottom: "42$",
  },
  {
    title: "Нові клієнти",
    amountOfMoney: "7 500 $",
    numberOfPeople: "50",
    amountBottom: "150$",
  },
];

export default function DashboardLeftSide() {
  // return <div className={css.wrapper}>DashboardLeftSide</div>;
  return (
    <div className={css.wrapper}>
      <ul className={css.cardsList}>
        {leftCard.map((card, index) => (
          <li key={index} className={css.cardItem}>
            <div className={css.darkCard}>
              <div className={css.topPart}>
                <p className={css.title}>{card.title}</p>
                <span className={css.statisticalData}>+2.4%</span>
              </div>
              <p className={css.amountOfMoney}>{card.amountOfMoney}</p>
              <div className={css.bottomPart}>
                <p className={css.numberOfPeople}>{card.numberOfPeople}</p>
                <BsPersonFill className={css.icon} size={18} />
                <p className={css.amountBottom}>{card.amountBottom}</p>
              </div>
            </div>

            <div className={css.lightCard}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
