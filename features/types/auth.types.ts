import z from "zod";
import { ICreatedAt } from "./shared.types";
import { ICourse } from "./courses.types";

const passwordRegex = z
  .string()
  .min(8, "Пароль должен иметь как минимум 8 символов")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
    "В пароле должен быть как минимум один специальный символ и одна цифра"
  );

export const registerSchema = z.object({
  email: z.string().nonempty("Введите емейл").email("Введите правильный емейл"),
  name: z
    .string()
    .nonempty("Введите имя")
    .max(100, "Имя не может иметь больше ста символов"),
  phone: z
    .string()
    .nonempty("Введите телефон")
    .min(10, "Телефон должен иметь как минимум 10 символов")
    .max(20, "Телефон не может иметь больше 20 символов")
    .regex(/^[-+]?(\d+)$/, "Введите правильный телефон"),

  password: passwordRegex,
  confirm: passwordRegex,
  date: z.date(),
});

export const loginSchema = z.object({
  email: z.string().nonempty("Введите емейл").email("Введите правильный емейл"),

  password: z.string().nonempty("Введите пароль"),
});

export type TLoginData = z.infer<typeof loginSchema>;
export type TRegisterData = Omit<
  z.infer<typeof registerSchema>,
  "confirm" | "date"
>;

export interface ISubscription {
  lvl: number;
  date: null | string;
}

export interface IAccount
  extends Pick<
      z.infer<typeof registerSchema>,
      "name" | "email" | "password" | "phone"
    >,
    ICreatedAt {
  id: number;
  courses: ICourse[];
  notifications: any[];
  notes: any[];
  subscribe: ISubscription;
  modules: any[];
  avatarPhoto: null | string;
}
