import { colors } from "./colors.constants";

export interface IApi {
  name: string;
  bgColor?: string;
  color?: string;
  tagColor?: string;
}

export const apis: IApi[] = [
  {
    name: "Авторизация и регистрация",
    bgColor: colors.blue,
    color: "#fff",
    tagColor: "#fff",
  },
  {
    name: "Профиль",
    bgColor: colors.yellow,
    color: colors.black,
    tagColor: colors.black,
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
  {
    name: "Товары",
  },
];
