import { useState, useEffect } from "react";

const EventEditorTemplate = (props) => {
  const [eventData, setEventData] = useState({
    Client: props.Client || "",
    Organization: props.Organization || "",
    City: props.City || "",
    Services: props.Services || "",
    Posts: props.Posts || "",
    Template: props.Template || "",
    Subject: props.Subject || "",
    StartTime: props.StartTime || "",
    EndTime: props.EndTime || "",
    Description: props.Description || "",
  });

  useEffect(() => {
    // Якщо props оновлюється, то синхронізуємо їх зі станом
    setEventData({
      Client: props.Client || "",
      Organization: props.Organization || "",
      City: props.City || "",
      Services: props.Services || "",
      Posts: props.Posts || "",
      Template: props.Template || "",
      Subject: props.Subject || "",
      StartTime: props.StartTime || "",
      EndTime: props.EndTime || "",
      Description: props.Description || "",
    });
  }, [props]); // Перезапуск при зміні props

  const handleChange = (field) => (e) => {
    setEventData((prevData) => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="custom-event-editor">
      {/* Клієнт */}
      <div className="field">
        <label>Клієнт:</label>
        <input
          type="text"
          className="input"
          value={eventData.Client}
          onChange={handleChange("Client")}
        />
      </div>

      {/* Організація */}
      <div className="field">
        <label>Організація:</label>
        <input
          type="text"
          className="input"
          value={eventData.Organization}
          onChange={handleChange("Organization")}
        />
      </div>

      {/* Місто */}
      <div className="field">
        <label>Місто:</label>
        <input
          type="text"
          className="input"
          value={eventData.City}
          onChange={handleChange("City")}
        />
      </div>

      {/* Сервісів */}
      <div className="field">
        <label>Сервісів:</label>
        <input
          type="text"
          className="input"
          value={eventData.Services}
          onChange={handleChange("Services")}
        />
      </div>

      {/* Постів */}
      <div className="field">
        <label>Постів:</label>
        <input
          type="text"
          className="input"
          value={eventData.Posts}
          onChange={handleChange("Posts")}
        />
      </div>

      {/* Випадаюче меню для шаблонів */}
      <div className="field">
        <label>Шаблон:</label>
        <select
          className="dropdownlist"
          value={eventData.Template}
          onChange={handleChange("Template")}
        >
          <option value="call">Дзвінок знайомство</option>
          <option value="presentation">Презентація продукту</option>
          <option value="package-selection">Вибір пакету послуг</option>
          <option value="contract">Укладення договору</option>
          <option value="payment-cameras">Сплата за відеокамери</option>
          <option value="payment-product">Сплата за продукт</option>
          <option value="receive-cameras">Отримання нами відеокамери</option>
          <option value="setup-cameras">Налаштування відеокамери</option>
          <option value="send-cameras">Відправка клієнту відеокамери</option>
          <option value="test-db">Створення тестової БД для клієнтів</option>
          <option value="connect-cameras">
            Підключення клієнту відеокамер
          </option>
          <option value="training">Навчання співробітників</option>
          <option value="checklist">Чек-лист готовності клієнта</option>
          <option value="integration">Інтеграція БД клієнта</option>
          <option value="repeat-payment">Повторна сплата за продукт</option>
          <option value="additional-payment">
            Додаткова сплата за відеокамери
          </option>
        </select>
      </div>

      {/* Подія */}
      <div className="field">
        <label>Подія:</label>
        <input
          type="text"
          className="input"
          value={eventData.Subject}
          onChange={handleChange("Subject")}
        />
      </div>

      {/* Вибір дати */}
      <div className="field">
        <label>Дата:</label>
        <input
          type="date"
          className="input"
          value={
            eventData.StartTime
              ? eventData.StartTime.toISOString().split("T")[0]
              : ""
          }
          onChange={handleChange("StartTime")}
        />
      </div>

      {/* Вибір часу */}
      <div className="field">
        <label>Час:</label>
        <input
          type="time"
          className="input"
          value={
            eventData.StartTime
              ? eventData.StartTime.toLocaleTimeString().slice(0, 5)
              : ""
          }
          onChange={handleChange("StartTime")}
        />
        <label> до </label>
        <input
          type="time"
          className="input"
          value={
            eventData.EndTime
              ? eventData.EndTime.toLocaleTimeString().slice(0, 5)
              : ""
          }
          onChange={handleChange("EndTime")}
        />
      </div>

      {/* Коментар */}
      <div className="field">
        <label>Коментар:</label>
        <textarea
          className="textarea"
          value={eventData.Description}
          onChange={handleChange("Description")}
        />
      </div>
    </div>
  );
};

export default EventEditorTemplate;
