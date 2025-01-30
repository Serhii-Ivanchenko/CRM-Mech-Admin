import { useState } from "react";
import CalendarPeriodSelector from "../../sharedComponents/CalendarPeriodSelector/CalendarPeriodSelector";
import CurrentDate from "../../sharedComponents/CurrentDate/CurrentDate";
import RangeTimeSelector from "../../sharedComponents/RangeTimeSelector/RangeTimeSelector";
import css from "./AdminPlannerControlBar.module.css";
import InfoSettingsVisibility from "../../sharedComponents/InfoSettingsVisibility/InfoSettingsVisibility";
import { toggleVisibilityLids } from "../../../redux/visibility/slice";
import { selectVisibilityLids } from "../../../redux/visibility/selectors";
import { labelNamesLids } from "../../../utils/CrmAdminUtils/dataToCrmAdmin";

export default function AdminPlannerControlBar() {
    const [periodStartData, setPeriodStartData] = useState(new Date());
    const [periodEndData, setPeriodEndData] = useState(new Date());
  
  return <div className={css.wrapper}>
    <div className={css.leftContainer}>
    <CurrentDate />
    <RangeTimeSelector/>
    <CalendarPeriodSelector
    periodStartData={periodStartData}
    periodEndData={periodEndData}
    handleInputChangeBeg={setPeriodStartData}
    handleInputChangeEnd={setPeriodEndData}/>
    </div>
    <div className={css.rightContainer}>
    <InfoSettingsVisibility
          selectVisibility={selectVisibilityLids}
          toggleVisibilityAction={toggleVisibilityLids}
          labelNames={labelNamesLids}
          // className={css.settingsContainerInCrm}
        />
    </div>
    
  </div>;
}
