import { Outlet } from "react-router-dom";
import css from "./MainContent.module.css";

export default function MainContent() {
  return (
    <div className={css.wrapper}>
      <Outlet />
    </div>
  );
}
