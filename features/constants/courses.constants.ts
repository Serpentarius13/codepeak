import {
  ICourse,
  TDirection,
  TExperience,
  TLanguage,
  TRating,
} from "../types/courses.types";

type TTypedMap<T extends string | symbol | number> = Record<T, string>;

export const courseLanguageMap: TTypedMap<TLanguage> = {
  javascript: "JavaScript",
  csharp: "C#",
  rust: "Rust",
} as const;

export const courseExperienceMap: TTypedMap<TExperience> = {
  junior: "Для начинающих",
  middle: "Немного опыта",
  "middle+": "Для специалистов",
} as const;

export const courseDirectionMap: TTypedMap<TDirection> = {
  backend: "Бэкенд разработка",
  frontend: "Фронтенд разработка",
  practic: "Практическое и полезное",
  devops: "DevOps",
} as const;

export const courseRatingMap: TTypedMap<TRating> = {
  basic: "Стандартный",
  popular: "Популярный",
  top: "Топовый",
} as const;

export const courses: ICourse[] = [
  {
    id: 1,
    name: "C# Developer",
    description:
      "Мы приветствуем тебя на курсе C# разработчика. Мы сделали все, чтобы данный курс был максимально по душе вам!",
    query: "csharp-developer",
    lang: "javascript",
    direction: "backend",
    rating: "basic",
    experience: "junior",
    graphic: ["labels"],
    labels: ["Для самых маленьких и сильных"],
    createdAt: "2023-05-11T10:01:41.186Z",
    updatedAt: "2023-05-11T10:01:41.186Z",
    lessons: [
      {
        id: 1,
        title: "Поговорим о переменных и типах данных",
        description:
          "Что же вы знаете о переменных и типах данных? На этом уроке мы расскажем и рассмотрим основные типы и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:03:40.499Z",
        updatedAt: "2023-05-11T10:03:40.499Z",
      },
      {
        id: 2,
        title: "Поговорим о функциях",
        description:
          "Что же вы знаете о функциях? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:34.067Z",
        updatedAt: "2023-05-11T10:04:34.067Z",
      },
      {
        id: 3,
        title: "Поговорим о массивах данных",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:44.049Z",
        updatedAt: "2023-05-11T10:04:44.049Z",
      },
      {
        id: 4,
        title: "Поговорим о критическом мышлении",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:52.176Z",
        updatedAt: "2023-05-11T10:04:52.176Z",
      },
      {
        id: 5,
        title: "Поговорим о альтруизме/полезности",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:05:07.885Z",
        updatedAt: "2023-05-11T10:05:07.885Z",
      },
    ],
    subscription: "Spotlight",
    duration: "1",
  },
  {
    id: 1,
    name: "C# Developer",
    description:
      "Мы приветствуем тебя на курсе C# разработчика. Мы сделали все, чтобы данный курс был максимально по душе вам!",
    query: "csharp-developer",
    lang: "javascript",
    direction: "backend",
    rating: "basic",
    experience: "junior",
    graphic: ["labels"],
    labels: ["Для самых маленьких и сильных"],
    createdAt: "2023-05-11T10:01:41.186Z",
    updatedAt: "2023-05-11T10:01:41.186Z",
    lessons: [
      {
        id: 1,
        title: "Поговорим о переменных и типах данных",
        description:
          "Что же вы знаете о переменных и типах данных? На этом уроке мы расскажем и рассмотрим основные типы и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:03:40.499Z",
        updatedAt: "2023-05-11T10:03:40.499Z",
      },
      {
        id: 2,
        title: "Поговорим о функциях",
        description:
          "Что же вы знаете о функциях? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:34.067Z",
        updatedAt: "2023-05-11T10:04:34.067Z",
      },
      {
        id: 3,
        title: "Поговорим о массивах данных",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:44.049Z",
        updatedAt: "2023-05-11T10:04:44.049Z",
      },
      {
        id: 4,
        title: "Поговорим о критическом мышлении",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:52.176Z",
        updatedAt: "2023-05-11T10:04:52.176Z",
      },
      {
        id: 5,
        title: "Поговорим о альтруизме/полезности",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:05:07.885Z",
        updatedAt: "2023-05-11T10:05:07.885Z",
      },
    ],
    subscription: "Sunlight",
    duration: "5",
  },
  {
    id: 1,
    name: "devops",
    description:
      "Мы приветствуем тебя на курсе C# разработчика. Мы сделали все, чтобы данный курс был максимально по душе вам!",
    query: "csharp-developer",
    lang: "javascript",
    direction: "devops",
    rating: "basic",
    experience: "junior",
    graphic: ["labels"],
    labels: ["Для самых маленьких и сильных"],
    createdAt: "2023-05-11T10:01:41.186Z",
    updatedAt: "2023-05-11T10:01:41.186Z",
    lessons: [
      {
        id: 1,
        title: "Поговорим о переменных и типах данных",
        description:
          "Что же вы знаете о переменных и типах данных? На этом уроке мы расскажем и рассмотрим основные типы и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:03:40.499Z",
        updatedAt: "2023-05-11T10:03:40.499Z",
      },
      {
        id: 2,
        title: "Поговорим о функциях",
        description:
          "Что же вы знаете о функциях? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:34.067Z",
        updatedAt: "2023-05-11T10:04:34.067Z",
      },
      {
        id: 3,
        title: "Поговорим о массивах данных",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:44.049Z",
        updatedAt: "2023-05-11T10:04:44.049Z",
      },
      {
        id: 4,
        title: "Поговорим о критическом мышлении",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:04:52.176Z",
        updatedAt: "2023-05-11T10:04:52.176Z",
      },
      {
        id: 5,
        title: "Поговорим о альтруизме/полезности",
        description:
          "Что же вы знаете о массивах данных? На этом уроке мы расскажем и рассмотрим основны и их использование",
        video: {
          url: "video url",
          delay: "1:23:03",
        },
        courseId: 1,
        createdAt: "2023-05-11T10:05:07.885Z",
        updatedAt: "2023-05-11T10:05:07.885Z",
      },
    ],
    subscription: "Dark",
    duration: "12",
  },
];
