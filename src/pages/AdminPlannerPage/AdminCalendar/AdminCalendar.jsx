import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  //   PopupOpenEventArgs,
} from "@syncfusion/ej2-react-schedule";
import EventEditorTemplate from "./EventEditorTemplate";

// Кастомний шаблон редактора для створення/редагування події
const eventEditorTemplate = () => {
  return (
    <>
      <EventEditorTemplate />
    </>
  );
};

export default function AdminCalendar() {
  const data = [
    {
      Id: 1,
      Subject: "Meeting",
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 12, 30),
      Client: "John Doe",
    },
  ];

  // Обробник події для відкриття попапа
  const handlePopupOpen = (args) => {
    if (args.type === "Editor") {
      // Можна додати логіку перед відкриттям вікна
      console.log("Popup opened for event creation/edit");
    }
  };

  return (
    <div>
      <ScheduleComponent
        selectedDate={new Date(2023, 1, 15)}
        eventSettings={{
          dataSource: data,
        }}
        editorTemplate={eventEditorTemplate} // Кастомний шаблон для редактора
        popupOpen={handlePopupOpen} // Подія відкриття попапа
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
}
