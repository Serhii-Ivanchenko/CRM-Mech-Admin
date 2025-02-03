// Лейбл для сторінки лідів - налаштування видимості

export const labelNamesLeads = {
  name: "Ім'я",
  phone: "Телефон",
};

// Лейбл для сторінки dashBoard - налаштування видимості

export const labelNamesDashBoard = {
  sales: "Продажи",
  costs: "Витрати",
  profit: "Прибуток",
  leads: "Ліди",
  newСlients: "Нові клієнти",
};

export const statusLeadsMapping ={
  new: "Новий",
  contact: "Контакт",
  payment: "Оплата",
  equipment: "Обладнання",
  connection: "Підключення",
};

// Селекти подій в картках Leads
export const eventOptions = {
  contact: [
    "Дзвінок-знайомство", 
    "Презентація продукту", 
    "Вибір пакету послуг", 
    "Укладення договору"
  ],
  payment: [
    "Сплата за відеокамери", 
    "Сплата за продукт", 
    "Додаткова сплата за відеокамери"
  ],
  equipment: [
    "Отримання відеокамер", 
    "Налаштування відеокамер", 
    "Відправка клієнту відеокамер", 
    "Підключення відеокамер"
  ],
  connection: [
    "Створення тестової БД",
    "Інтеграція БД клієнта",
    "Навчання співробітників",
    "Чек-лист готовності"
  ]
};

// Тимчасовий масив для сторінкі Лідів

export const cardsLeads = [
  {
    id: 1,
    photo_url: null,
    name: "Віталій Голобородько",
    phone: "0663123466",
    company: "Мастер Сервіс",
    status: "new",
    date: null,
    time: null,
    event:null,
    post: 23,
    city: "Київ",
  },
  {
    id: 2,
    photo_url: null,
    name: "Віталій Голобородько",
    phone: "0663155466",
    company: "Мастер Сервіс",
    status: "contact",
    date: "2025-01-26",
    time: "15:45",
    event:null,
    post: 23,
    city: "Київ",
  },
  {
    id: 3,
    photo_url: null,
    name: "Іван Кондратекно",
    phone: "0507953489",
    company: "Спектр",
    status: "equipment",
    date: "2025-01-08",
    time: "17:00",
    event:null,
    post: 20,
    city: "Чернівці",
  },
  {
    id: 4,
    photo_url: null,
    name: "Іван Кондратекно",
    phone: "0687953555",
    company: "Спектр",
    status: "connection",
    date: "2025-02-01",
    time: "9:00",
    event:null,
    post: 20,
    city: "Чернівці",
  },
  {
    id: 5,
    photo_url: null,
    name: "Олег Кушнір",
    phone: "0637814792",
    company: "Астрал",
    status: "payment",
    date: "2025-01-12",
    time: "18:00",
    event:null,
    post: 21,
    city: "Харків",
  },
  {
    id: 6,
    photo_url: null,
    name: "Віталій Голобородько",
    phone: "0687953489",
    company: "Мастер Сервіс",
    status: "connection",
    date: "2025-01-15",
    time: "13:00",
    event:null,
    post: 23,
    city: "Київ",
  },
  {
    id: 7,
    photo_url: null,
    name: "Олег Кушнір",
    phone: "0677222792",
    company: "Астрал",
    status: "connection",
    date: "2025-02-01",
    time: "15:30",
    event:"Спала за продукт",
    post: 21,
    city: "Харків",
  },
  {
    id: 8,
    photo_url: null,
    name: "Віталій Голобородько",
    phone: "0687953444",
    company: "Мастер Сервіс",
    status: "connection",
    date: "2025-01-19",
    time: "11:00",
    event:null,
    post: 23,
    city: "Київ",
  },
  {
    id: 9,
    photo_url: null,
    name: "Олександр Трухля",
    phone: "0737953111",
    company: "Спектр",
    status: "connection",
    date: "2025-01-08",
    time: "17:00",
    event:null,
    post: 15,
    city: "Одеса",
  },
]

