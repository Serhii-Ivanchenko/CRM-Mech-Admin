import AdminPlannerControlBar from "../../components/AdminPlanner/AdminPlannerControlBar/AdminPlannerControlBar.jsx";
import AdminPlannerNavigationSection from "../../components/AdminPlanner/AdminPlannerNavigationSection/AdminPlannerNavigationSection.jsx";
import MainContent from "../../components/AdminPlanner/MainContent/MainContent.jsx";
import css from "./AdminPlannerPage.module.css";

export default function AdminPlannerPage() {
  return (
    <div className={css.contentContainer}>
      <AdminPlannerControlBar />
      <AdminPlannerNavigationSection />

      <MainContent />
    </div>
  );
}
