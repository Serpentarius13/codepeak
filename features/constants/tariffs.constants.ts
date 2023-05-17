import { IColored } from "../types/shared.types";
import { colors } from "./colors.constants";

export type TTariffName = "Dark" | "Spotlight" | "Sunlight";

export interface ITariff {
  name: TTariffName;
  coursesCount: number | string;
  advantage: string;
  description: string;
  price: number | string;
}

export interface IColorTariff extends ITariff, IColored {}

export const tariffs: IColorTariff[] = [
  {
    name: "Dark",
    price: "2,590",
    coursesCount: 178,
    description: "только просмотр уроков, без контроля успехов",
    advantage: "тренажер",
    bgColor: colors.darkestBlack,
    color: "#fff",
  },
  {
    name: "Spotlight",
    price: "3,990",
    coursesCount: 224,
    description:
      "просмотр уроков, доступ к книгам, тренажер на повышение квалификации, помощь с резюме, собственное API",
    advantage: "составим резюме",
    bgColor: colors.blue,
    color: "#fff",
  },
  {
    name: "Sunlight",
    price: "10,000",
    coursesCount: 332,
    description:
      "все от предыдущих подписок + вызов ментора раз в день, гарантия трудоустройства",
    advantage: "трудоустрим",
    bgColor: colors.yellow,
    color: colors.darkestBlack,
  },
];
