import css from "./DashboardLeftSide.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBriefcaseFill } from "react-icons/bs";
import gmail from "../../../assets/images/IconsDashboardLeftSide/gmail.png";
import meta from "../../../assets/images/IconsDashboardLeftSide/Meta.png";
import partners from "../../../assets/images/IconsDashboardLeftSide/Partners 1.png";
import profit from "../../../assets/images/IconsDashboardLeftSide/Прибуток графік.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const leftCard = [
  {
    title: "Продажі",
    amountOfMoney: "612 200 $",
    numberOfPeople: "50",
    amountBottom: "128$",
    extraData: [
      {
        icon: (
          <p
            className={css.numberIcon}
            style={{
              backgroundColor: "var(--green-btn-normal)",
              color: "var(--light-gray)",
            }}
          >
            20
          </p>
        ),
        text: "Vanilla",
        price: "1K $",
      },
      {
        icon: (
          <p
            className={css.numberIcon}
            style={{
              backgroundColor: "var(--status-new)",
              color: "var(--bg-input)",
            }}
          >
            20
          </p>
        ),
        text: "Standard",
        price: "2K $",
      },
      {
        icon: (
          <p
            className={css.numberIcon}
            style={{ backgroundColor: "var(--red)", color: "var(--bg-input)" }}
          >
            10
          </p>
        ),
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
    extraData: [
      {
        icon: <BsClipboardData size={24} className={css.icon} />,
        text: "Маркетинг",
        price: "5.2K $",
      },
      {
        icon: <BsFillPeopleFill size={24} className={css.icon} />,
        text: "Персонал",
        price: "4.3K $",
      },
      {
        icon: <BsBriefcaseFill size={24} className={css.icon} />,
        text: "Операційні",
        price: "3K $",
      },
    ],
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
    extraData: [
      {
        icon: gmail,
        numberOfPeople: "50",
        price1: "40$",
        price: "2K $",
      },
      {
        icon: meta,
        numberOfPeople: "50",
        price1: "40$",
        price: "2K $",
      },
      {
        icon: partners,
        numberOfPeople: "20",
        price1: "60$",
        price: "1.2K $",
      },
    ],
  },
  {
    title: "Нові клієнти",
    amountOfMoney: "7 500 $",
    numberOfPeople: "50",
    amountBottom: "150$",
    extraData: [
      {
        icon: gmail,
        numberOfPeople: "20",
        price1: "100$",
        price: "2K $",
      },
      {
        icon: meta,
        numberOfPeople: "20",
        price1: "90$",
        price: "2K $",
      },
      {
        icon: partners,
        numberOfPeople: "10",
        price1: "60$",
        price: "1.2K $",
      },
    ],
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
                <div className={css.bottomLeftPart}>
                  <p className={css.numberOfPeople}>{card.numberOfPeople}</p>
                  <BsPersonFill className={css.icon} size={18} />
                  <p className={css.amountBottom}>{card.amountBottom}</p>
                </div>

                <span className={css.statisticalData}>+2.4%</span>
              </div>
            </div>

            <div className={css.lightCard}>
              {card.title !== "Прибуток" ? (
                <ul className={css.lightCardList}>
                  {card.extraData.map((data, index) => (
                    <li key={index} className={css.lightCardItem}>
                      {card.title === "Витрати" || card.title === "Продажі" ? (
                        <>
                          <div className={css.iconAndText}>
                            {data.icon}
                            <p className={css.dataText}>{data.text}</p>
                          </div>
                          <p className={css.dataPrice}>{data.price}</p>
                        </>
                      ) : (
                        <>
                          <div className={css.iconAndText}>
                            <span className={css.imgBox}>
                              <img src={data.icon} alt="" className={css.img} />
                            </span>
                            <p className={css.people}>{data.numberOfPeople}</p>
                            <BsPersonFill className={css.icon} size={18} />
                            <p className={css.money}>{data.price1}</p>
                          </div>
                          <p className={css.dataPrice}>{data.price}</p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <img src={profit} alt="" />
              )}
            </div>

            <button className={css.threeDotsBox}>
              <BsThreeDotsVertical size={20} className={css.icon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
