import { useState } from "react";
import CalendarPeriodSelector from "../../sharedComponents/CalendarPeriodSelector/CalendarPeriodSelector";
import RangeTimeSelector from "../../sharedComponents/RangeTimeSelector/RangeTimeSelector";
import css from "./DashBoardControlBar.module.css";
import { toggleVisibilityDashBoard } from "../../../redux/visibility/slice";
import { selectVisibilityDashBoard } from "../../../redux/visibility/selectors";
import InfoSettingsVisibility from "../../sharedComponents/InfoSettingsVisibility/InfoSettingsVisibility";
import { labelNamesDashBoard } from "../../../utils/CrmAdminUtils/dataToCrmAdmin";

export default function DashBoardControlBar() {
  const [periodStartData, setPeriodStartData] = useState(new Date());
  const [periodEndData, setPeriodEndData] = useState(new Date());

  return (
    <div className={css.wrapper}>
      <div className={css.leftContainer}>
        <RangeTimeSelector />
        <CalendarPeriodSelector
          periodStartData={periodStartData}
          periodEndData={periodEndData}
          handleInputChangeBeg={setPeriodStartData}
          handleInputChangeEnd={setPeriodEndData}
        />
      </div>
      <div className={css.rightContainer}>
        <InfoSettingsVisibility
          selectVisibility={selectVisibilityDashBoard}
          toggleVisibilityAction={toggleVisibilityDashBoard}
          labelNames={labelNamesDashBoard}
          className={css.settingsContainerInCrm}
        />
      </div>
    </div>
  );
}
