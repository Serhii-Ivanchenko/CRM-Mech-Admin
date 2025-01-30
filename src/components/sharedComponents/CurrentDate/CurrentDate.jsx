import { format } from "date-fns";
import { uk } from "date-fns/locale";
import styles from "./CurrentDate.module.css";

const CurrentDate = () => {
  const date = new Date();
  let formattedDate = format(date, "LLLL, yyyy", { locale: uk });

  formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return <span className={styles.dateContaiter}>{formattedDate}</span>;
};


export default CurrentDate;
