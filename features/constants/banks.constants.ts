export interface IBank {
  name: string;
  img: string;
  startingDigit: number;
}

export const banks: IBank[] = [
  {
    startingDigit: 2,
    name: "Мир",
    img: "/img/banks/mir.svg",
  },
  {
    startingDigit: 4,
    name: "Visa",
    img: "/img/banks/visa.svg",
  },
  {
    startingDigit: 5,
    name: "MasterCard",
    img: "/img/banks/master.svg",
  },
];
