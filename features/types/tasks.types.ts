import { TRating } from "./courses.types";
export interface IStatistics {
  views: number;
  completed: number;
  tryes: number;
}

export interface ITask {
  name: string;
  description: string;
  course: string;
  id: number;
  experience: TRating;
  statistic: IStatistics;
  rating: number;
}
