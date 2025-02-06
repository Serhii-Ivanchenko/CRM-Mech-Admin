export const initialState = {
  auth: {
    userData: {
      id: null,
      name: null,
      email: null,
      phone_number: null,
      avatar_url: null,
      company_name: null,
      company_logo: null,
      company_addresses: [],
      language: null,
      currency: null,
      time_zone: null,
      first_page: null,
      country: null,
      city: null,
      address: null,
      post_index: null,
      balance: null,
      services: [],
      selectedServiceId: null,

      tariff: {
        isActive: false,
        tariffName: "Demo",
        amountDue: null,
        camsNumber: null,
        dueDate: null,
      },
      session_id: null,
      role: null,
    },
    apiKey: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },

  calendar: {
    events: [],
    isLoading: false,
    error: null,
  },

  cars: {
    car: {
      car_id: null,
      status: null,
      photo: null,
      plate: null,
      checkInTime: null,
      makeModel: null,
      vin: null,
      engine: null,
      records: null,
      liftTime: null,
      year: null,
      mileage: null,
      brandPhoto: null,
      modelPhoto: null,
    },
    current: [],
    day: [],
    month: [],
    all: [],
    newCars: [],
    periodCars: [],
    forHours: {},
    monthlyLoad: {},
    date: new Date().toISOString().substring(0, 10),
    isLoading: false,
    error: null,
    loadPercent: null,
    queryMonth: null,
    workHours: {},
    isLoadingForCalendar: false,
    isLoadingCarsByDay: false,
  },

  crm: {
    serviceData: {
      mechanics: [],
      posts: [],
      services: [],
      workingHours: [],
      availability: [],
    },
    records: [],
    dayRecords: [],
    periodRecords: [],
    dates: {
      startDate: null,
      endDate: null,
    },
    visits: [],
    load: [],
    isLoading: false,
    error: null,
  },

  clients: {
    clientInfo: {
      client: {
        id: null,
        name: null,
        phone: null,
        email: null,
        address: null,
        rating: null,
        status: null,
        date_of_birth: null,
        registration_date: null,
        last_visit: null,
        total_spent: 0,
        preferred_contact_method: null,
        notes: null,
        loyalty_program_status: null,
        number_of_visits: null,
        service_package: null,
        discount_type: null,
        emergency_service: null,
        next_service_date: null,
        source_of_contact: null,
        warranty_cases: null,
        special_offers: null,
        referral_count: null,
        discount_card_number: null,
        accumulated_bonus: null,
        related_customer_id: null,
        company_id: null,
      },
      car: {
        plate: null,
        year: null,
        vin: null,
        service_book: null,
      },
      service_history: [],
      isLoading: false,
      error: null,
    },
  },

  service: {
    // data: {
    //   id: null,
    //   name: null,
    //   logo: null,
    //   address: null,
    //   userCode: null,
    //   account: null,
    //   bank: null,
    //   bankDetails: null,
    //   legalAddress: null,
    //   managerPhone: null,
    //   managerName: null,
    //   officePhoneNumber: null,
    //   headPhoneNumber: null,
    // },
    services: [],
    selectedServiceInSettingsId: null,
    isLoading: false,
    error: null,
  },

  settings: {
    employees: [],
    employee: {
      name: null,
      phone: null,
      address: null,
      birthday: null,
      position: null,
      role: null,
      email: null,
      login: null,
      password: null,
      period: null,
      rate: 0.0,
      minRate: 0.0,
      amount: 0.0,
      sparesAmount: 0.0,
      sparesPrice: 0.0,
      isDisabled: false,
      schedule: {},
      files: {
        passport: null, //Файл паспорта (PDF)
        itn: null, // Файл ІПН (PDF)
        diploma: null, // Файл диплому (PDF)
        laborBook: null, // Файл трудової книги (PDF)
        CV: null, // Резюме працівника (PDF)
        contract: null, // Договір підряду (PDF)
        employment: null, // Договір про найм (PDF)
        agreement: null, //  Договір МВ (PDF)
        logo: null, //  Фотографія працівника (JPEG, PNG)
      },
    },
    suppliers: [],
    supplier: {
      supplier_d: null,
      name: null,
      address: null,
      paymentCondition: null,
      days: null,
      owner: null,
      code: null,
      bill: null,
      bank: null,
      bankCode: null,
      companyAddress: null,
      managerPhone: null,
      managerName: null,
      officePhone: null,
      ownerPhone: null,
      website: null,
      distrEmail: null,
      login: null,
      password: null,
      tokenAPI: null,
      priceEmail: null,
      connection_instruction: null,
      deliverySchedule: {},
      country: null,
      isDisabled: false,
      rating: null,
      cash_register: false,
      mark_up: true,
      basket: true,
    },
    schedule: [],
    posts: [],
    prices: [],
    categoryPrices: [],
    ratings: [],
    rating: {},
    // markup: { fixed: [], dynamic: [] },
    markup: [],
    markupItem: {},
    distributorMarkup: [],
    cashRegisters: [],
    cashRegisterItem: {},
    isLoading: false,
    error: null,
  },

  warehouse: {
    warehouses: [],
    // sections: [],
    // racks: [],
    // shelves: [],
    // places: [],
    prompts: [],
    isLoading: false,
    error: null,
  },

  archive: {
    archiveData: [],
    reasons: [
      {
        id: 1,
        name: "duplicate",
      },
      {
        id: 2,
        name: "employee",
      },
      {
        id: 3,
        name: "random",
      },
      {
        id: 4,
        name: "refusal",
      },
      {
        id: 5,
        name: "no_show",
      },
      {
        id: 6,
        name: "rating",
      },
      {
        id: 7,
        name: "no_help",
      },
    ],
    isLoading: false,
    error: null,
  },

  chat: {
    isChatOpen: false,
    channels: [],
    inbox: [],
    messagesList: [],
    chatMessages: [],
    userInfo: [],
    tags: [],
    prompts: [],
    selectedPrompt: null,
  },

  connections: {
    stats: [],
    connectionsList: [],
    isLoading: false,
    error: null,
  },
};
