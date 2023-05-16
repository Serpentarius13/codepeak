export type TTariffName = "Dark" | "Spotlight" | "Sunlight";

export interface ITariff {
  name: TTariffName;
  coursesCount: number | string;
  advantage: string;
  description: string;
  price: number | string;
}

export interface IColorTariff extends ITariff {
  bgColor: string;
  color: string;
}
