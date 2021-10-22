import { v4 as uuidv4 } from "uuid";

export const wemanRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Услуги по покраске волос",
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Лечение и уход за волоссами",
        services: [],
      },
      { id: uuidv4(), subCategorie: "Стрижка и укладка волос", services: [] },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Зал ногтевой эстетики",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Маникюр",
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Педикюр",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Макияж",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Татуаж",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Брови и ресницы",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Депиляция",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Воск",
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Шугаринг",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Косметология",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Пилинги",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Массажи",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "SPA процедуры",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
];

export const manRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [{ id: uuidv4(), subCategorie: "Стрижка", services: [] }],
  },
  {
    id: uuidv4(),
    selectName: "Зал ногтевой эстетики",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "Маникюр",
        services: [],
      },
      {
        id: uuidv4(),
        subCategorie: "Педикюр",
        services: [],
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Массажи",
    subCategories: [
      {
        id: uuidv4(),
        subCategorie: "",
        services: [],
      },
    ],
  },
  {},
];

export const childRoom = [
  {
    id: uuidv4(),
    selectName: "Парикмахерский зал",
    subCategories: [{ id: uuidv4(), subCategorie: "Стрижка", services: [] }],
  },
];
