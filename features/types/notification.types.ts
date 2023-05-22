import { ICreatedAt } from "./shared.types";

export interface INotification extends ICreatedAt {
  isRead: boolean;
  id: number;
  title: string;
  description: string;
  date: string;
  userId: number;
}
